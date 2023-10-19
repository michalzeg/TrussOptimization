Set-Location ./src/TrussOptimization.Web/TrussOptimizationClientApp
npm install
Set-Location ../

# Start the .NET application using dotnet run
Start-Process -FilePath "cmd" -ArgumentList "/c", "dotnet run"

# Start the Angular application using ng serve
Start-Process -FilePath "cmd" -ArgumentList "/c", "cd ./TrussOptimizationClientApp && npm run serve"
