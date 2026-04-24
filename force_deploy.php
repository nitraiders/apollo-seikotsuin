<?php
// Final Force Deployment Script for Apollo Seikotsuin
$html = base64_decode('PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImphIj4KPGhlYWQ+CiAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICA8dGl0bGU+aG9tZSAtIEFwb2xsbyBTZWlrb3RzdWluPC90aXRsZT4KICAgIDxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0idGhlbWUuY3NzIj4KPC9oZWFkPgo8Ym9keT4KICAgIDxoZWFkZXIgY2xhc3M9ImctaGVhZGVyIj48ZGl2IGNsYXNzPSJpbm5lciI+PGltZyBzcmM9ImltYWdlcy9sb2dvLnBuZyIgYWx0PSJBcG9sbG8iIGNsYXNzPSJzaXRlLWxvZ28iPjwvZGl2PjwvaGVhZGVyPgogICAgPGRpdiBjbGFzcz0ibWFpbi13cmFwIj4KICAgICAgICA8aGVhZGVyIGNsYXNzPSJzYWxvbi1oZWFkZXIiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJzYWxvbi1pbmZvLWxlZnQiPjxkaXYgY2xhc3M9ImNhdGNocGhyYXNlIj5Tb2thIENpdHkgfCBQcml2YXRlIFNhbG9uPC9kaXY+PGgxIGNsYXNzPSJzYWxvbi1uYW1lIj7jgqLjg43jg63mlb7pqqjpmmo8L2gxPjwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJzYWxvbi1hY3Rpb25zIj48YSBocmVmPSJodHRwczovL2xpbi5lZS82Y1lSbm5XIiBjbGFzcz0iYnRuLXJlc2VydmUtYnJhbmQiPkxJTkUgUmVzZXJ2ZTwvYT48YSBocmVmPSJodHRwczovL3RvbC1hcHAuanAvcy9hcG9sbG8iIGNsYXNzPSJidG4tcmVzZXJ2ZS1uZXQiPk5ldCBSZXNlcnZlIDI0aDwvYT48L2Rpdj4KICAgICAgICA8L2hlYWRlcj4KICAgICAgICA8bmF2Pjx1bCBjbGFzcz0idGFicy1uYXYiPjxsaSBjbGFzcz0iYWN0aXZlIj48YSBocmVmPSJpbmRleC5odG1sIj5Ib21lPC9hPjwvbGk+PGxpPjxhIGhyZWY9Im1lbnUuaHRtbCI+TWVudTwvYT48L2xpPjxsaT48YSBocmVmPSJzdGFmZi5odG1sIj5TdGFmZjwvYT48L2xpPjxsaT48YSBocmVmPSJyZXZpZXcuaHRtbCI+UmV2aWV3czwvYT48L2xpPjxsaT48YSBocmVmPSJhY2Nlc3MuaHRtbCI+QWNjZXNzPC9hPjwvbGk+PC91bD48L25hdj4KICAgICAgICA8ZGl2IGNsYXNzPSJtdi1jb250YWluZXIiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJtdi1sZWZ0Ij48aW1nIHNyYz0iaW1hZ2VzL21haW5fdmlzdWFsLmpwZyI+PC9kaXY+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9Im12LXJpZ2h0Ij4KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9Im12LWNhdGNoIj5SZWxheCBhdCBvdXIgY29tcGxldGVseSBwcml2YXRlIHNhbG9uPC9kaXY+CiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPSJkaXNwbGF5OmZsZXg7Z2FwOjEwcHg7bWFyZ2luLXRvcDoyMHB4OyI+CiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0iaHR0cHM6Ly9saW4uZWUvNmNZUm5uVyIgY2xhc3M9ImJ0bi1yZXNlcnZlLWJyYW5kIiBzdHlsZT0iZmxleDoxOyI+TElORSBSZXNlcnZlPC9hPgogICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9Imh0dHBzOi8vdG9sLWFwcC5qcC9zL2Fwb2xsbyIgY2xhc3M9ImJ0bi1yZXNlcnZlLW5ldCIgc3R5bGU9ImZsZXg6MTsiPk5ldCBSZXNlcnZlPC9hPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICAgIDxoMiBjbGFzcz0ic2VjdGlvbi10aXRsZSI+U2Fsb24gRGF0YTwvaDI+CiAgICAgICAgPHRhYmxlIGNsYXNzPSJocGItdGFibGUiPgogICAgICAgICAgICA8dHI+PHRoPkFkZHJlc3M8L3RoPjx0ZD5TYWl0YW1hLCBTb2thLCBTaGluemVudGNobyA1MTMtMTA8L3RkPjwvdHI+CiAgICAgICAgICAgIDx0cj48dGg+QWN jZXNzPC90aD48dGQ+MTIgbWluIHdhbGsgZnJvbSBTaW5kZW4gU3RhdGlvbiBXZXN0IEV4aXQ8L3RkPjwvdHI+CiAgICAgICAgICAgIDx0cj48dGg+SG91cnM8L3RoPjx0ZD5XZWVrZGF5cyA5OjAwLTIwOjAwPC90ZD48L3RyPgogICAgICAgICAgICA8dHI+PHRoPkhvbGlkYXlzPC90aD48dGQ+U2F0LCBTdW4sIEhvbGlkYXlzPC90ZD48L3RyPgogICAgICAgIDwvdGFibGU+CiAgICA8L2Rpdj4KPC9ib2R5Pgo8L2h0bWw+');
$css = "
:root { --brand-orange: #F39800; --brand-yellow: #FFF100; --brand-bg: #fdfcf8; --text-main: #333; --container-width: 960px; }
body { font-family: 'Noto Sans JP', sans-serif; background: var(--brand-bg); color: var(--text-main); margin: 0; }
.g-header { background: #fff; padding: 20px 0; border-bottom: 2px solid var(--brand-orange); text-align: center; }
.site-logo { max-width: 250px; }
.main-wrap { width: var(--container-width); margin: 20px auto; background: #fff; padding: 40px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
.salon-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee; padding-bottom: 20px; margin-bottom: 20px; }
.btn-reserve-brand { background: #F39800; color: #fff; padding: 15px 30px; border-radius: 4px; font-weight: bold; text-decoration: none; display: block; text-align: center; }
.btn-reserve-net { background: #FFF100; color: #333; padding: 15px 30px; border-radius: 4px; font-weight: bold; text-decoration: none; display: block; text-align: center; }
.tabs-nav { display: flex; list-style: none; border-bottom: 3px solid var(--brand-orange); padding: 0; margin-bottom: 30px; }
.tabs-nav li { flex: 1; }
.tabs-nav a { display: block; padding: 10px; text-align: center; background: #fafafa; border: 1px solid #eee; text-decoration: none; color: #333; }
.tabs-nav li.active a { background: var(--brand-orange); color: #fff; }
.mv-container { display: flex; gap: 30px; margin-bottom: 40px; }
.mv-left { flex: 1.5; } .mv-left img { width: 100%; border-radius: 8px; }
.mv-right { flex: 1; }
.mv-catch { font-size: 20px; font-weight: bold; color: var(--brand-orange); margin-bottom: 20px; }
.section-title { border-left: 8px solid var(--brand-orange); padding-left: 15px; margin: 40px 0 20px; font-weight: bold; }
.hpb-table { width: 100%; border-collapse: collapse; border-top: 2px solid var(--brand-orange); }
.hpb-table th { background: #FFF5E6; width: 150px; text-align: left; padding: 15px; border-bottom: 1px solid #eee; }
.hpb-table td { padding: 15px; border-bottom: 1px solid #eee; }
";

file_put_contents('index.html', $html);
file_put_contents('theme.css', $css);
echo "Deployed index.html and theme.css successfully.";
unlink(__FILE__);
?>
