$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RootDir   = Join-Path $ScriptDir ".."
$OutFile   = Join-Path $RootDir "src/core/config/env.ts"
$EnvFile   = Join-Path $RootDir ".env"

"export const env = {" | Out-File -FilePath $OutFile -Encoding UTF8

Get-Content $EnvFile | ForEach-Object {
    $line = $_ -replace "`r",""
    if ([string]::IsNullOrWhiteSpace($line)) { return }
    if ($line.Trim().StartsWith("#")) { return }

    $parts = $line -split "=", 2
    $key   = $parts[0]
    $value = if ($parts.Count -gt 1) { $parts[1] } else { "" }
    $lowerKey = $key.ToLower()

    "  $lowerKey: `"$value`"," | Out-File -FilePath $OutFile -Append -Encoding UTF8
}

"};" | Out-File -FilePath $OutFile -Append -Encoding UTF8

Write-Host "✅ Environment generated successfully"
