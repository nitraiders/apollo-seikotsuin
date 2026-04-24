$path = "c:\Users\NEC-PCuser\Documents\kazu_midnight_fortress\apollo-seikotsuin\index.html"
$bytes = [System.IO.File]::ReadAllBytes($path)
$b0=$bytes[0]; $b1=$bytes[1]; $b2=$bytes[2]
Write-Host "First 3 bytes: $b0 $b1 $b2"
if($b0 -eq 0xEF -and $b1 -eq 0xBB -and $b2 -eq 0xBF) { Write-Host "BOM detected" } else { Write-Host "No BOM - correct" }
$text = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
Write-Host "--- First 600 chars ---"
Write-Host $text.Substring(0,600)
Write-Host "--- File size ---"
Write-Host "$($bytes.Length) bytes"
