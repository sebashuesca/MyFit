# Landing MyFit

Desde la raíz del proyecto:

```bash
python3 web/serve.py
```

Abre <http://127.0.0.1:8000/>. Para usar otro puerto: `python3 web/serve.py --port 8080`.

La página descarga el APK desde la URL de GitHub Releases indicada en `index.html` y `assets/site.js`. Tailwind CSS v4 y las tipografías se cargan desde CDN; el diseño principal también tiene estilos locales en `assets/styles.css` para que la previsualización conserve su estructura sin conexión.
