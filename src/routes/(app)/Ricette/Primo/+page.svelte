<script>
    import {primi} from "$lib/Primi.js";
</script>



<body class='body'>
    <table>
        <tbody>
            {#each $primi as piatto}
                <tr><a href={piatto.url}>
                    <td><img src={piatto.img} alt=''></td>
                    <td>{piatto.title}</td>
                    </a>
                </tr>
            {/each}
        </tbody>
    </table>
</body>

