if(!$PSVersionTable.PSEdition.Equals('Core')) {
    Install-PackageProvider -Name NuGet -Force -Scope CurrentUser
}

if((Get-Module -Name Pester).Version.Major -lt 4)
{
    Install-Module -Name Pester -Force -Verbose -Scope CurrentUser -SkipPublisherCheck -MinimumVersion 4.3.1
}

Import-Module Pester

Write-Host "Using Pester version: $((Get-Module -Name Pester).Version)" -ForegroundColor Cyan

Invoke-Pester -PassThru -OutputFile TEST-pester.xml -OutputFormat NUnitXml -EnableExit -OutVariable Results

if($Results.FailedCount.Equals(0))
{
    Write-Host "##vso[task.setvariable variable=unitTestPass]true"
}
else {
    Write-Host "##vso[task.setvariable variable=unitTestPass]false"
}
