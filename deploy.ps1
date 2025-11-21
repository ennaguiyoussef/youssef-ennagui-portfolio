# Script de déploiement automatique
# Exécute ce fichier avec PowerShell : .\deploy.ps1

Write-Host "🚀 Déploiement du Portfolio Youssef Ennagui sur GitHub Pages" -ForegroundColor Green
Write-Host ""

# Vérifier si Git est installé
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Git n'est pas installé. Installe-le depuis https://git-scm.com/" -ForegroundColor Red
    exit
}

# Demander le username GitHub
Write-Host "📝 Configuration du déploiement" -ForegroundColor Yellow
$username = Read-Host "Entre ton username GitHub"

if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "❌ Username GitHub requis!" -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "Initialisation du repository Git..." -ForegroundColor Cyan

# Initialiser Git si nécessaire
if (-not (Test-Path .git)) {
    git init
    git branch -M main
}

# Ajouter tous les fichiers
git add .

# Demander le message de commit
$commitMessage = Read-Host "Message de commit (appuie sur Entrée pour 'Initial commit')"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Initial commit - Portfolio Angular avec déploiement GitHub Pages"
}

git commit -m $commitMessage

# Vérifier si le remote existe
$remoteExists = git remote | Select-String -Pattern "origin" -Quiet

if (-not $remoteExists) {
    $repoUrl = "https://github.com/$username/youssef-ennagui-portfolio.git"
    Write-Host ""
    Write-Host "Ajout du remote: $repoUrl" -ForegroundColor Cyan
    git remote add origin $repoUrl
}

# Pousser le code
Write-Host ""
Write-Host "Push du code sur GitHub..." -ForegroundColor Cyan
git push -u origin main

Write-Host ""
Write-Host "✅ Code poussé avec succès!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 ÉTAPES SUIVANTES:" -ForegroundColor Yellow
Write-Host "1. Va sur https://github.com/$username/youssef-ennagui-portfolio/settings/pages"
Write-Host "2. Dans 'Source', sélectionne 'GitHub Actions'"
Write-Host "3. Attends 2-3 minutes que le déploiement se termine"
Write-Host "4. Ton site sera disponible sur: https://$username.github.io/youssef-ennagui-portfolio/"
Write-Host ""
Write-Host "Pour voir le statut du déploiement:"
Write-Host "https://github.com/$username/youssef-ennagui-portfolio/actions"
Write-Host ""

