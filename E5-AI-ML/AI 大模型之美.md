### 1.基础知识篇：探索大型语言模型的能力

#### 1.使用ChatGPT API

##### 0.创建 OpenAI 的 API Key

##### 1.搭建本地的 Jupyter Labs 开发环境

```python

conda create --name py310 python=3.10
conda activate py310
conda install -c conda-forge jupyterlab
conda install -c conda-forge ipywidgets
conda install -c conda-forge openai
```

```python

export OPENAI_API_KEY=在这里写你获取到的ApiKey
jupyter-lab .
```



##### 2.通过 [Colab](https://colab.research.google.com/) 使用 JupyterLab

```python
!pip install openai
%env OPENAI_API_KEY=在这里写你获取到的ApiKey
```

```python

import openai
import os

openai.api_key = os.environ.get("OPENAI_API_KEY")
COMPLETION_MODEL = "text-davinci-003"

prompt = """
Consideration product : 工厂现货PVC充气青蛙夜市地摊热卖充气玩具发光蛙儿童水上玩具

1. Compose human readable product title used on Amazon in english within 20 words.
2. Write 5 selling points for the products in Amazon.
3. Evaluate a price range for this product in U.S.

Output the result in json format with three properties called title, selling_points and price_range
"""

def get_response(prompt):
    completions = openai.Completion.create (
        engine=COMPLETION_MODEL,
        prompt=prompt,
        max_tokens=512,
        n=1,
        stop=None,
        temperature=0.0,        
    )
    message = completions.choices[0].text
    return message

print(get_response(prompt)) 
```

#### 2.[利用大语言模型做情感分析](https://time.geekbang.org/column/article/642179)

像 OpenAI 就只提供了 Complete 和 Embedding 两个接口，其中，Complete 可以让模型根据你的输入进行自动续写，Embedding 可以将你输入的文本转化成向量。

>  大语言模型 NLP  Natural Language Processing 
>
> 特别是 Kaggle 这个机器学习比赛的网站里，可以搜索到很多其他人使用这些传统方法来设计情感分析的解决方案。这些方案都以 Jupyter Notebook 的形式出现，**[链接](https://www.kaggle.com/code/ankumagawa/sentimental-analysis-using-naive-bayes-classifier)**。

```python

import openai
import os
from openai.embeddings_utils import cosine_similarity, get_embedding

# 获取访问open ai的密钥
openai.api_key = os.getenv("OPENAI_API_KEY")
# 选择使用最小的ada模型
EMBEDDING_MODEL = "text-embedding-ada-002"

# 获取"好评"和"差评"的
positive_review = get_embedding("好评")
negative_review = get_embedding("差评")

positive_example = get_embedding("买的银色版真的很好看，一天就到了，晚上就开始拿起来完系统很丝滑流畅，做工扎实，手感细腻，很精致哦苹果一如既往的好品质")
negative_example = get_embedding("降价厉害，保价不合理，不推荐")

def get_score(sample_embedding):
  return cosine_similarity(sample_embedding, positive_review) - cosine_similarity(sample_embedding, negative_review)

positive_score = get_score(positive_example)
negative_score = get_score(negative_example)

print("好评例子的评分 : %f" % (positive_score))
print("差评例子的评分 : %f" % (negative_score))
```

#### 3.巧用提示语，说说话就能做个聊天机器人

```python

import openai
import os

openai.api_key = os.environ.get("OPENAI_API_KEY")
COMPLETION_MODEL = "text-davinci-003"

prompt = '请你用朋友的语气回复给到客户，并称他为“亲”，他的订单已经发货在路上了，预计在3天之内会送达，订单号2021AEDG，我们很抱歉因为天气的原因物流时间比原来长，感谢他选购我们的商品。'

def get_response(prompt, temperature = 1.0):
    completions = openai.Completion.create (
        engine=COMPLETION_MODEL,  #engine, 指定模型
        prompt=prompt,   #prompt，自然就是我们输入的提示语
        max_tokens=1024, #max_tokens  也就是调用生成的内容允许的最大 token 数量。
        n=1, # 代表你希望 AI 给你生成几条内容供你选择。
        stop=None, 
        temperature=temperature,
    )
    message = completions.choices[0].text
    return message

print(get_response(prompt))
   
```

- 参数 temperature:

  这个参数的输入范围是 0-2 之间的浮点数，代表输出结果的随机性或者说多样性。我们选择了 1.0，也就是还是让每次生成的内容都有些不一样。你也可以把这个参数设置为 0，这样，每次输出的结果的随机性就会比较小。

- 参数  max_tokens：也就是调用生成的内容允许的最大 token 数量。你可以简单地把 token 理解成一个单词。实际上，token 是分词之后的一个字符序列里的一个单元。有时候，一个单词会被分解成两个 token。比如，icecream 是一个单词，但是实际在大语言模型里，会被拆分成 ice 和 cream 两个 token。这样分解可以帮助模型更好地捕捉到单词的含义和语法结构。一般来说，750 个英语单词就需要 1000 个 token。我们这里用的 text-davinci-003 模型，允许最多有 4096 个 token。需要注意，这个数量既包括你输入的提示语，也包括 AI 产出的回答，两个加起来不能超过 4096 个 token。比如，你的输入有 1000 个 token，那么你这里设置的 max_tokens 就不能超过 3096。不然调用就会报错。
- 参数 stop：代表你希望模型输出的内容在遇到什么内容的时候就停下来。这个参数我们常常会选用 "\n\n"这样的连续换行，因为这通常意味着文章已经要另起一个新的段落了，既会消耗大量的 token 数量，又可能没有必要。我们在下面试了一下，将“，”作为 stop 的参数，你会发现模型在输出了“亲”之后就停了下来。
- 参数 prompt：自然就是我们输入的**提示语**

##### AI 聊天机器人

```python

question =  """
Q : 鱼香肉丝怎么做？
A : 
1.准备好食材：500克猪里脊肉，2个青椒，2个红椒，1个洋葱，2勺蒜蓉，3勺白糖，适量料酒，半勺盐，2勺生抽，2勺酱油，2勺醋，少许花椒粉，半勺老抽，适量水淀粉。
2.将猪里脊肉洗净，沥干水分，放入料酒、盐，抓捏抓匀，腌制20分钟。
3.将青红椒洗净，切成丝，洋葱洗净，切成葱花，蒜末拌入小苏打水中腌制。
4.将猪里脊肉切成丝，放入锅中，加入洋葱，炒制至断生，加入青红椒，炒匀，加入腌制好的蒜末，炒制至断生。
5.将白糖、生抽、酱油、醋、花椒粉、老抽、水淀粉倒入锅中，翻炒匀，用小火收汁，调味即可。

Q : 那蚝油牛肉呢？
A : 
"""
print(get_response(question))
```



```python

import openai
import os

openai.api_key = os.environ["OPENAI_API_KEY"]

def ask_gpt3(prompt):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=512,
        n=1,
        stop=None,
        temperature=0.5,
    )

    message = response.choices[0].text.strip()
    return message

print("你好，我是一个聊天机器人，请你提出你的问题吧?")

questions = []
answers = []

def generate_prompt(prompt, questions, answers):
    num = len(answers)
    for i in range(num):
        prompt += "\n Q : " + questions[i]
        prompt += "\n A : " + answers[i]
    prompt += "\n Q : " + questions[num] + "\n A : "        
    return prompt

while True:
    user_input = input("> ")
    questions.append(user_input)
    if user_input.lower() in ["bye", "goodbye", "exit"]:
        print("Goodbye!")
        break
    
    prompt = generate_prompt("", questions, answers)

    answer = ask_gpt3(prompt)
    print(answer)
    answers.append(answer)
```

##### 让 AI 帮我解决情感分析问题

```python

prompts = """判断一下用户的评论情感上是正面的还是负面的
评论：买的银色版真的很好看，一天就到了，晚上就开始拿起来完系统很丝滑流畅，做工扎实，手感细腻，很精致哦苹果一如既往的好品质
情感：正面

评论：随意降价，不予价保，服务态度差
情感：负面
"""

good_case = prompts + """
评论：外形外观：苹果审美一直很好，金色非常漂亮
拍照效果：14pro升级的4800万像素真的是没的说，太好了，
运行速度：苹果的反应速度好，用上三五年也不会卡顿的，之前的7P用到现在也不卡
其他特色：14pro的磨砂金真的太好看了，不太高调，也不至于没有特点，非常耐看，很好的
情感：
"""

print(get_response(good_case))
```

- 第一部分是我们给到 AI 的指令，也就是告诉它要去判断用户评论的情感。
- 第二部分是按照一个固定格式给它两个例子，一行以“评论：”开头，后面跟着具体的评论，另一行以“情感：”开头，后面跟着这个例子的情感。
- 第三部分是给出我们希望 AI 判定的评论，同样以“评论：”开头跟着我们想要它判定的评论，另一行也以“情感：”开头，不过后面没有内容，而是等着 AI 给出判定。

而上面这个“给一个任务描述、给少数几个例子、给需要解决的问题”这样三个步骤的组合，也是大语言模型里使用提示语的常见套路。一般我们称之为 Few-Shots Learning（少样本学习），也就是给一个或者少数几个例子，AI 就能够举一反三，回答我们的问题。小结

第一个是给 AI 一个明确的指令，让它帮我重写一段话。

第二个，是将整个对话的历史记录都发送出去，并且通过 Q 和 A 提示 AI 这是一段对话，那么 AI 自然能够理解整个上下文，搞清楚新的问题是指“蚝油牛肉怎么做”而不是“哪里买或者怎么吃”。

而第三个例子，我们则是给了 AI 几个正面情感和负面情感的例子，它就能够直接对新的评论做出准确的情感判断。
