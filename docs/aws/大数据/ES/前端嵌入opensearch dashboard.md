

可以在前端嵌入opensearch dashboard,在dashboard中点击share-embed code-copy iframe code，这里也可以选择shortURL，然后嵌入到Html中

![](https://raw.githubusercontent.com/Xu-Hardy/image-host/master/20230926201648.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML with iframe</title>
</head>
<body>

<h1>My Web Page</h1>
<p>This is my web page with an embedded iframe:</p>

<!-- 嵌入 iframe -->
<iframe src="https://search-test-jmrcguxjl6ngaz7mo46oujfipi.cn-north-1.es.amazonaws.com.cn/_dashboards/goto/8075fb7bfd823d3f94ab3a07ae7da377?security_tenant=private" height="600" width="800"></iframe>
<iframe src="https://search-testifranme-rnwlwnxhk52k26trxkwxpwgssq.cn-north-1.es.amazonaws.com.cn/_dashboards/goto/59d24ed13bfb970e65197c762bdff600" height="600" width="800"></iframe>
<p>Some other content on my web page...</p>

</body>
</html>
```


![](https://raw.githubusercontent.com/Xu-Hardy/image-host/master/20230926201748.png)