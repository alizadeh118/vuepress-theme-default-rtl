module.exports = {
    base: '/vuepress-theme-default-rtl/',
    lang: 'fa-IR',
    title: 'قالب VuePress',
    description: 'پیش‌نمایش نسخه راست به چپ قالب پیش فرض',
    theme: 'default-rtl',
    themeConfig: {
        persianDate: true,
        lastUpdated: 'آخرین ویرایش',
        editLinks: true,
        smoothScroll: true,
        logo: '/logo.png',
        nav: [
            {
                text: 'خانه',
                link: '/'
            },
            {
                text: 'لورم ایپسوم',
                link: '/guide/'
            },
            {
                text: 'متن ساختگی',
                link: '/config/'
            },
            {
                text: 'سادگی',
                link: '/theme/'
            },
            {
                text: 'صنعت چاپ',
                ariaLabel: 'صنعت چاپ',
                items: [
                    {
                        text: 'گرافیک',
                        items: [
                            {
                                text: 'چاپگرها',
                                link: '/config/#رئیس'
                            },
                            {
                                text: 'متون',
                                link: '/config/#فرهنگ'
                            }
                        ]
                    },
                    {
                        text: 'شرایط تکنولوژی',
                        items: [
                            {
                                text: 'مورد نیاز',
                                link: '/config/#جلوی'
                            },
                            {
                                text: 'کاربردهای متنوع',
                                link: '/config/#پایم'
                            },
                            {
                                text: 'بهبود',
                                link: '/config/#فهمیدم'
                            },
                            {
                                text: 'ابزارهای کاربردی',
                                link: '/config/#راضی'
                            }
                        ]
                    },
                    {
                        text: 'شناخت فراوان',
                        items: [
                            {
                                text: 'جامعه و متخصصان',
                                link: '/config/#بودم'
                            },
                            {
                                text: ' طراحان رایانه‌ای',
                                link: '/config/#پشیمون'
                            }
                        ]
                    }
                ]
            },
            {
                text: 'تنظیمات قالب اصلی',
                link: 'https://vuepress.vuejs.org/theme/default-theme-config.html'
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'عنوان اول',
                    collapsable: false,
                    children: [
                        '',
                        'getting-started',
                        'directory-structure',
                        'basic-config'

                    ]
                },
                {
                    title: 'عنوان دوم',
                    collapsable: false,
                    children: [
                        'assets',
                        'markdown'
                    ]
                }
            ]
        }
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['container', {
            type: 'vue',
            before: '<pre class="vue-container"><code>',
            after: '</code></pre>'
        }]
    ]
}
