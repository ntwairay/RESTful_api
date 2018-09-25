param(
    [string]$RootPath = 'templates'
)

Import-Module Pester

function Test-Template {
    param(
        [string]$TemplatePath,
        [string]$TemplateName,
        [switch]$NestedTemplate
    )

    $expectedProperties = @(
        '$schema',
        'contentVersion',
        'parameters',
        'variables',
        'resources',
        'outputs'
    )

    $expectedSchema = 'https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#'

    $expectedParameters = @{
        standardTags   = "object"
        namePrefix     = "object"
        location       = "object"
        geoReplication = "bool"
        templatePaths  = "object"
    }


    $Template = Get-Content -Path $File.FullName -Raw | ConvertFrom-Json -ErrorAction SilentlyContinue

    if (!$TemplateName) {
        $TemplateName = $TemplatePath.Split("\")[-1].Split('.')[0]
    }

    Describe $TemplateName {

        It "Should convert from JSON" {
            $Template | Should Not Be $null
        }

        It "Should have the correct schema" {
            $Template.'$Schema' | Should Be $expectedSchema
        }

        It "Has the expected properties" {
            $templateProperties = $Template | Get-Member -MemberType NoteProperty | ForEach-Object Name | Sort-Object
            $templateProperties | Should Be ($expectedProperties | Sort-Object)
        }

        It "Deploys atleast 1 resource" {
            $template.resources.Count | Should Not Be 0
        }

        # Checks for first level nested templates
        if (!$NestedTemplate) {
            foreach ($ExpectedParam in $expectedParameters.Keys) {
                $ExpectedType = $expectedParameters[$ExpectedParam]
                $Parameter = $Template.parameters | Get-Member -Name $ExpectedParam
                $ParameterType = $Template.parameters.($ExpectedParam).type

                It "parameter $ExpectedParam should exist" {
                    $Parameter | Should Not Be $null
                }

                It "parameter $ExpectedParam  should be of type $ExpectedType" {
                    $ParameterType | Should Be $ExpectedType
                }
            }
        }
    }
}

$Folders = Get-ChildItem -Directory -Path $RootPath

foreach ($Folder in $Folders) {
    $Files = Get-ChildItem -Path $Folder.FullName -Filter "*.azuredeploy.json"
    foreach ($File in $Files) {
        if ($File.Name.Split('.').Count -eq 3) {
            Test-Template -TemplatePath $File.FullName -TemplateName $File.Name.Replace("*.azuredeploy.json", "")
        }
        else {
            Test-Template -TemplatePath $File.FullName -TemplateName $File.Name.Replace("*.azuredeploy.json", "") -NestedTemplate
        }
    }
}
