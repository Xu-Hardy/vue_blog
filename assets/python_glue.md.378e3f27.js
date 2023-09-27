import{_ as n,c as s,o as a,a as t}from"./app.58320140.js";const A=JSON.parse('{"title":"python是有名的胶水语言,今天打算试下它的胶水特性。","description":"","frontmatter":{},"headers":[],"relativePath":"python/glue.md"}'),p={name:"python/glue.md"},l=t(`<h1 id="python是有名的胶水语言-今天打算试下它的胶水特性。" tabindex="-1">python是有名的胶水语言,今天打算试下它的胶水特性。 <a class="header-anchor" href="#python是有名的胶水语言-今天打算试下它的胶水特性。" aria-hidden="true">#</a></h1><p>（环境Ubuntu16.04,win10因为gcc的原因不知道为什么一直报错）</p><hr><p>1.首先先说Java的部分，在Python中启动JVM就要调用jpype，直接pip安装就好了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">pip install jpype1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>然后import jpype，就可以在Python里面写Java代码。</p><hr><p>2.c++部分</p><p>c++部分还是要依靠g++，利用gcc原本的功能把cpp文件编译成为so文件，然后在Python中直接调用。</p><pre><code>//c++代码
#include &lt;iostream&gt;
using namespace std;
 
class TestLib
{
    public:
        int display();
        void display(int a);
		void add(int a);
};
int TestLib::display() {
    cout&lt;&lt;&quot;First display&quot;&lt;&lt;endl;
	return 1;
}
 
void TestLib::display(int a) {
    cout&lt;&lt;&quot;Second display:&quot;&lt;&lt;a&lt;&lt;endl;
}

void TestLib::add(int a) {
		cout&lt;&lt;a&lt;&lt;endl;	
	}

extern &quot;C&quot; {
    TestLib obj;
    int display() {
        obj.display();
      }
    void display_int() {
        obj.display(2);
      }

	void add_re() {
		obj.add(1);	
	}

}
</code></pre><p>编译命令：</p><pre><code>g++ -o s.so -shared -fPIC s.cpp
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">from jpype import *</span></span>
<span class="line"><span style="color:#A6ACCD;">startJVM(getDefaultJVMPath(), &quot;-ea&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">a = java.lang.System.out.println(&quot;Hello World&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">shutdownJVM()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import ctypes</span></span>
<span class="line"><span style="color:#A6ACCD;">so = ctypes.cdll.LoadLibrary</span></span>
<span class="line"><span style="color:#A6ACCD;">lib = so(&quot;./s.so&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">print(&#39;display()&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">b = lib.display()</span></span>
<span class="line"><span style="color:#A6ACCD;">print(&#39;display(100)&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">lib.display_int(100)</span></span>
<span class="line"><span style="color:#A6ACCD;">lib.add_re()</span></span>
<span class="line"><span style="color:#A6ACCD;">c = lib.add_re()</span></span>
<span class="line"><span style="color:#A6ACCD;">print(b)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,13),e=[l];function o(i,c,d,r,y,C){return a(),s("div",null,e)}const _=n(p,[["render",o]]);export{A as __pageData,_ as default};
