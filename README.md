# alien encode(alkencode)

Alien Encode(外星人编码)，可以将 UTF-8 字符编码为像数据损坏后的格式，比如：

> ▞▙▞▚▘▌▚▖▞▖▞▚▘▄▚▙▄▘▘▚▄▚▗█

我觉得这个方式很有趣


---

## Features

- UTF-8 编码：Alien Encode 可以把任意UTF-8 字符映射为像这种乱码“▞▗▘▚▄▜▄▚”的形式（包括utf8表情符号😀）。
- 抗干扰性：编码后可以在编码后插入然后**英文**或者**gb2312**(中文)而依然可以解码，具有插入干扰具有抵抗力。


<details>
  <summary>
	
    像这样：
</summary>

[在线试试](https://no-passwd.github.io/alkencode/)

#### 英文插入
   
```python
I am lost▞▄▘▚▄▀▄▟I'm really really▘▙▘▚▘▄▚▗▄▝▞▚▞▄lost▚▞▘▙▘▀▄▘▚▎▄▖▘▚▚▚▄▚▞▙▞▀▞▖▗▎▞and i don't know▙▞▚▘▌▚▖▘▙ how to get back▘▞▞▄▄▀▄▗▄▌▞▖▄▃▘▙▘▚▄▟help▚▞▘▙▘▘▘▙▚me!▚▘█▚▛▄and,I h▚▚▞
```

#### 中文插入

```python
告诉你吧▗▞▄▃▄世界▙▞▖▗▞我不▚▎▄相▙▚▄信▗▞！▄▝我不相▞▗信天是蓝的▄▌▗▞▞▙我不相信▘▜▗▚▗▄▞报应▙▘▗▗▀
```

以上粘贴到“crypttext(密文区)”点击“decrypt(解密)”依然可以正常解密。

</details>

---


## Usage

要使用 Alien Encode，可以这样使用：

1. 克隆仓库：

   ```bash
   git clone https://github.com/no-passwd/alkencode.git
   ```

2. 引入js文件：

```js
  <script type="text/javascript" src="alkencode.js"></script>
```

3. 现在可以使用加密和解密函数了：

   ```js
    function encrypt() {
            let input = document.getElementById("inputText");
            let output = document.getElementById("outputText");
			output.value=kencode(input.value);
			/**Encode this*/
			}

        function decrypt() {
            let input = document.getElementById("inputText");
            let output = document.getElementById("outputText");
			input.value=dekencode(output.value);
			/**Decode this*/
			}
   ```

参考index.html示例

或者直接引入

`https://cdn.jsdelivr.net/gh/no-passwd/alkencode@main/alkencode.js`

```js
<script
  src="https://cdn.jsdelivr.net/gh/no-passwd/alkencode@main/alkencode.js"
  integrity="sha256-EBG0TL6HlUIaezcDOLjeJ0MvIUE7eZb+JqZeMlHPasg="
  crossorigin="anonymous"></script>
```


---


## Notice

抗干扰性目前仅对**英文**和**gb2312**(中文)有效（这是因为正则仅匹配了**英文**或者**gb2312**），插入其他语言可能出现未知错误。

---


## Contributing

欢迎对 Alien Encode 的贡献，目前需要以下方面：
1.优化alkencode.js的正则匹配，使其匹配除了**英文**或者**gb2312**的其他编码。
2.翻译index.html为其他语言（目前只支持中文/英文）。


---

## 许可证

Alien Encode 使用 [MIT 许可证](LICENSE) 进行许可。您可以根据许可证的条款自由使用、修改和分发该程序。

---

## 感谢

这个项目的灵感来自这个网站：

`https://strangers.atrocityland.com/enter/site/deadends/deadend_iamlost.html`

我遇到这个网站觉得它的的乱码表示很有趣，然而我却读不懂它的编码。

查了一圈，发现这个编码本身没有意义，仅仅是用来表示单词传输过程发送了损坏，表示乱码的。

之后我突然想到我可以给她（乱码）赋予意义的。

