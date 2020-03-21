<template>
    <div class="theme-container">
        <div class="theme-default-content">
            <h1>خطای 404</h1>

            <blockquote>{{ getMsg() }}</blockquote>

            <RouterLink to="/">
                بازگشت به صفحه اول.
            </RouterLink>
        </div>
    </div>
</template>

<script>
    const msgs = [
        `اینجا خبری نیست که نیست!`,
        `متاسفانه صفحه مورد نظر یافت نشد :(`,
        `صفحه‌ای که دنبال آن بودید پیدا نشد :(`,
        `متاسفانه، صفحه‌ مورد نظر شما یافت نشد :(`,
    ]

    export default {
        methods: {
            getMsg() {
                return msgs[Math.floor(Math.random() * msgs.length)]
            }
        }
    }
</script>

<style lang="stylus">
    @font-face
        font-family GanjNamehSans
        src url('../fonts/GanjNamehSans-Regular.woff2') format('woff2'), url('../fonts/GanjNamehSans-Regular.woff') format('woff'), url('../fonts/GanjNamehSans-Regular.ttf') format('truetype')
</style>
