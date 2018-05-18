<template>
    <div>
        <h2>Valid formats</h2>
        <ul>
            <li v-for="format in validFormats">
                {{format}}
            </li>
        </ul>

        <h2>Invalid formats</h2>
        <ul>
            <li v-for="format in invalidFormats">
                {{format}}
            </li>
        </ul>
        <ul>
            <li v-for="format in invalidFormats">
                {{format}}
            </li>
        </ul>
        <p>But <em>don't worry</em>, we got you covered, we offer some correct suggestion on closest invalid currency format you entered.</p>
        <br>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                validFormats : [
                    '18.215',
                    'Rp17500',
                    'Rp17.500,00',
                    'Rp 120.325',
                    '005.000',
                    '001000'
                ],
                invalidFormats: [
                    '17,500 (invalid separator)',
                    '2 500(invalid separator)',
                    '3000 Rp (valid character in wrong position)',
                    'Rp (missing value)'
                ]
            }
        }
    }
</script>