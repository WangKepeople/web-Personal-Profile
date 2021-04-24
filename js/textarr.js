let textArr = [{
    name: 'h2',
    class: 'inten',
    text: '岗位：Web数据工程师'
}, {
    name: 'h4',
    class: 'text-title',
    text: '个人信息'
}, {
    name: 'div',
    class: 'base-info',
    children: [{
        name: 'div',
        children: [{
            name: 'div',
            text: '姓名：WKR'
        }, {
            name: 'div',
            text: '年龄：19'
        }]
    }, {
        name: 'div',
        children: [{
            name: 'div',
            text: '毕业院校：YZDX'
        }, {
            name: 'div',
            text: '联系邮箱：wangkepeople@Outlook.com'
        }]
    }]
}, {
    name: 'h4',
    class: 'text-title',
    text: '教育背景'
}, {
    name: 'div',
    class: 'school',
    children: [{
        name: 'span',
        class: 'mr',
        text: '学历：专科'
    }, {
        name: 'span',
        text: '专业：计算机网络技术'
    }, {
        name: 'div',
        text: '主修课程：C,C++,Java,JavaScript,MySQL',
    }]
}, {
    name: 'h4',
    class: 'text-title',
    text: '专业技能'
}, {
    name: 'ul',
    class: 'ul-list',
    children: [{
        name: 'li',
        text: '熟练掌握',
        children: [{
            name: 'span',
            class: 'tag',
            text: 'H5、CSS3、JS'
        }]
    }, {
        name: 'li',
        text: '掌握前端主流',
        children: [{
            name: 'span',
            class: 'tag',
            text: 'Vue、React框架'
        }]
    }, {
        name: 'li',
        text: '熟练掌握',
        children: [{
            name: 'span',
            class: 'tag',
            text: 'Python数据处理，熟悉tornado、django、web.py等网络开发框架'
        }]
    }, {
        name: 'li',
        text: '熟悉后端语言Java、node.js'
    }, {
        name: 'li',
        text: '熟悉',
        children: [{
            name: 'span',
            class: 'tag',
            text: 'MySQL数据库'
        }, {
            name: 'span',
            text: '熟悉索引工作原理，有丰富的mysql性能优化经验以及高可用、集群实战经验'
        }]
    }]
}, {
    name: 'h4',
    class: 'text-title',
    text: '生涯履历'
}, {
    name: 'div',
    class: 'work',
    children: [{
        name: 'span',
        class: 'mr',
        text: '2018 — 2019'
    }, {
        name: 'span',
        text: '汇编程序开发'
    }]
}, {
    name: 'ul',
    class: 'ul-list',
    children: [{
        name: 'li',
        text: '高中自主学习X86编程语言并设计部分测试案例，且有',
        children: [{
            name: 'span',
            class: 'tag',
            text: 'Dos-Box'
        }, {
            name: 'span',
            text: '使用经验，定期组织参与程序分析研讨技术会，为未来实战奠定了技术基础'
        }]
    }]
}, {
    name: 'h4',
    class: 'text-title',
    text: '高级项目'
}, {
    name: 'div',
    class: 'item-lv',
    children: [{
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            class: 'project-title',
            text: '项目名:学生德育分管理（小程序开发）'
        }, {
            name: 'li',
            text: '使用技术栈：html、Css、',
            children: [{
                name: 'span',
                class: 'tag',
                text: 'JavaScript、Vue、Mysql数据库'
            }]
        }, {
            name: 'li',
            text: '项目描述：基于微信小程序开发的学生德育分管理系统，方便德育分的管理以及后期统计任务的执行'
        }]
    }]
}, {
    name: 'h4',
    class: 'text-title',
    text: '自我评价'
}, {
    name: 'ul',
    class: 'ul-list',
    children: [{
        name: 'li',
        text: '具有',
        children: [{
            name: 'span',
            class: 'tag',
            text: '团队管理经验'
        }, {
            name: 'span',
            text: '，拥有良好的'
        }, {
            name: 'span',
            class: 'tag',
            text: '团队协调能力'
        }, {
            name: 'span',
            text: '，与同事配合极其默契'
        }]
    }, {
        name: 'li',
        text: '有一定的',
        children: [{
            name: 'span',
            class: 'tag',
            text: '自学及动手能力'
        }, {
            name: 'span',
            text: '，善于接受新事物，知晓'
        }, {
            name: 'span',
            class: 'tag',
            text: '全栈'
        }, {
            name: 'span',
            text: '开发'
        }]
    }, {
        name: 'li',
        text: '性格随和、诚恳稳重、身体素质较好、适应环境能力强'
    }]
}]
let style = `
    /*
    * 面试官您好，我是WKR
    * 特此准备了一份在线简历（仅仅是测试而已啦）
    * 先准备一些样式
    */
    *{
        transition: all .8s;
    }
    /* 容器中要添加点样式 */
    #codeEdit{
        color: #fff;
        background: #1E1E1E;
    }
    #resume{
        box-shadow: -1px 4px 9px 3px rgba(0, 0, 0, .15);
    }
    /* 再来点代码高亮 */
    pre#codeEdit{
        color: #CE9e78;
    }
    .token.selector{
        color: rgb(230, 155, 43);
    }
    .token.comment{
        color: #2eb996;
        font-size: 14px;
    }
    .token.property{
        color: #60C8FE;
    }
    .token.function {
        color: #DD4A68;
    }
    /* 好啦,右边就是我的简历，望查阅指正 */
`
let balloon = `
    <div class="balloon-wrap">
        <img src="img/balloon.png" id="bg-balloon-small">
        <img src="img/balloon.png" id="bg-balloon-large">
        <img src="img/logo.png" id="bg-balloon-logo">
    </div>
    <div class="connect" style="width: 100%; display: flex;"></div>`
let line = `
    <div class="line-wrap">
        <div class="line-left"></div>
        <div class="line-right">
            <p class="line-defColor line-item1"></p>
            <p class="line-darkColor line-item2"></p>
            <p class="line-defColor line-item3"></p>
            <p class="line-midColor line-item4"></p>
            <p class="line-darkColor line-item5"></p>
            <p class="line-midColor line-item6"></p>
            <p class="line-darkColor line-item7"></p>
            <p class="line-midColor line-item7"></p>
        </div>
    </div>
    <div class="connect"></div>`
let text = `
    <div class="text-wrap"></div>
`