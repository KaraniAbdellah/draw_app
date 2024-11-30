<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Tech Buttons</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background: #f4f4f4;
    }
    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: bold;
      color: white;
      background-color: #333;
      border: none;
      border-radius: 8px;
      padding: 10px 20px;
      margin: 10px;
      cursor: pointer;
      transition: transform 0.2s, background-color 0.2s;
    }
    .button:hover {
      transform: scale(1.1);
      background-color: #555;
    }
    .button-html { background-color: #f06529; }
    .button-sass { background-color: #cf649a; }
    .button-js { background-color: #f7df1e; color: #333; }
    .button-canvas { background-color: #005bbb; }
    .button-vscode { background-color: #007acc; }
  </style>
</head>
<body>
    <p>This is a drawing app built with:</p>
    <button class="button button-html">HTML5</button>
    <button class="button button-sass">SASS</button>
    <button class="button button-js">JavaScript</button>
    <button class="button button-canvas">Canvas API</button>
    <button class="button button-vscode">VS Code</button>
</body>
</html>





