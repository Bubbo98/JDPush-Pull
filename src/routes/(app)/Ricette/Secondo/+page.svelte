<script>
    import { secondi} from "$lib/Secondi.js";
</script>


<body class='body'>
    <table>
        <tbody>
            {#each $secondi as piatto}
                <tr>
                    <a href={piatto.url}>
                        <td><img src={piatto.img} alt=''></td>
                        <td>{piatto.title}</td>
                    </a>
                </tr>
            {/each}
        </tbody>
    </table>
</body>

