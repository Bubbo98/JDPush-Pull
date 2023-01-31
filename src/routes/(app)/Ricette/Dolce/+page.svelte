<script>
    import {dolci} from "$lib/Dolci.js";
</script>


<body class='body'>
    <table>
        <tbody>
            {#each $dolci as piatto}
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
