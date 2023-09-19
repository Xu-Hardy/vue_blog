关于Personal Health Dashboard配置通知发邮件的问题，



。 大致是用EventBridge监听Personal Health Dashboard事件，然后触发SNS发送通知。 1. 首先需要创建一个SNS主题，然后订阅这个主题，创建主题，选择标准，输入名称和显示名称。 2. 创建完毕之后选择创建订阅，选择电子邮件，输入要发送通知的电子邮件。此时邮件会发送通知，在邮件中点击confirm。 3. 回到Personal Health Dashboard，点击左侧的Heathy集成下的Amazon EvenBridge。 4. 输入规则的名称，时间源选择Amazon服务事件，事件模式选择Heath， 所有事件，目标选择 - Amazon web service - SNS - 刚刚创建的SNS的主题。