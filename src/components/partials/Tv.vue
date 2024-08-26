<script>
export default {
    props: {
        serie: Object
    },
    methods: {
        getFlag(lang) {
            switch (lang) {
                case "it":
                    return "fi fi-it"
                case "en":
                    return "fi fi-gb"
                case "us":
                    return "fi fi-us"
                case "fr":
                    return "fi fi-fr"
                case "es":
                    return "fi fi-es"
                case "pt":
                    return "fi fi-pt"
                case "ja":
                    return "fi fi-jp"
                case "nl":
                    return "fi fi-nl"
                case "de":
                    return "fi fi-de"
                case "zh":
                    return "fi fi-cn"
                case "ru":
                    return "fi fi-ru"
                case "ko":
                    return "fi fi-kr"
                default:
                    return "unknown"
            }
        }
    }
}
</script>
<template>
    <ul>
        <li>{{ serie.name }}</li>
        <li>{{ serie.original_name }}</li>
        <li><i :class="getFlag(serie.original_language)"></i></li>
        <li>{{ serie.vote_average }}</li>
    </ul>
</template>
<style lang="scss">
</style>