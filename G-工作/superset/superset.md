### 1.启动命令

本地调试：`npm run dev-server -- --superset=http://49.51.69.188 --devserverPort=9109`

### 2.webpack 中的html 在python 中生成

### 3.`html`中的js、css文件注入方式

`python`通过解析打包后的`/static/assets/manifest.json` 文件，加载注入`js`、`css`

```html
{% block body %}
  <div
    id="app"
    data-bootstrap="{{ bootstrap_data }}"
  ></div>
{% endblock %}

{% block tail_js %}
  {{ super() }}
  {{ js_bundle("addSlice") }}
{% endblock %}
```

```html
{% macro js_bundle(filename) %}
  {# HTML comment is needed for webpack-dev-server to replace assets
     with development version #}
  <!-- Bundle js {{ filename }} START -->
  {% for entry in js_manifest(filename) %}
    <script src="{{ entry }}"></script>
  {% endfor %}
  <!-- Bundle js {{ filename }} END -->
{% endmacro %}
```

```json
{
  "app": "superset",
  "entrypoints": {
    "theme": {
      "css": [
        "/static/assets/theme.05be1b72cf65aea84648.entry.css"
      ],
      "js": [
        "/static/assets/theme.05be1b72cf65aea84648.entry.js"
      ]
    }
  }
```

