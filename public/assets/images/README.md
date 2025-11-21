# Instructions pour votre photo de profil

## Comment ajouter votre vraie photo

1. **Préparez votre photo** :
   - Format recommandé : JPG ou PNG
   - Dimensions idéales : 450x450 pixels (format carré)
   - Poids maximal : moins de 500 KB
   - Qualité : professionnelle, fond neutre de préférence

2. **Renommez votre photo** :
   - Nom du fichier : `youssef-ennagui-photo.jpg`

3. **Placez-la dans le dossier** :
   ```
   public/assets/images/youssef-ennagui-photo.jpg
   ```

4. **Remplacez le fichier SVG placeholder** actuel par votre vraie photo JPG/PNG

## Alternative : Modifier le chemin dans le code

Si vous préférez utiliser un autre nom de fichier, modifiez la ligne 68 dans :
`src/app/pages/home/home.html`

```html
<img src="/assets/images/VOTRE-NOM-DE-FICHIER.jpg" 
     alt="Photo de Youssef Ennagui" 
     class="hero-image img-fluid rounded-4 shadow-lg">
```

## Conseils pour une belle photo de profil

✅ Sourire naturel
✅ Bon éclairage (lumière naturelle si possible)
✅ Fond uni ou neutre
✅ Tenue professionnelle
✅ Photo récente
✅ Cadrage centré sur le visage et les épaules

❌ Évitez les photos floues
❌ Évitez les selfies
❌ Évitez les fonds encombrés
❌ Évitez les filtres excessifs

