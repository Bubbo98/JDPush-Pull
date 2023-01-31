<script>
    import {getContext} from 'svelte';

    let Prodotti = getContext('Prodotti');
    let LogoForever = getContext('LogoForever');
    let Aloe = getContext('Aloe');
    function openInNewTab(url){
        window.open(url, '_blank').focus();
    }
</script>

<body class='body textAlignCenter'>
<img src= {LogoForever} class='logo fullWidth contain' alt='LOGO'>
<p>Cos'è Forever?</p>
<p>Fondata nel 1978 a Scottsdale, in Arizona, Forever Living Products è leader mondiale nella coltivazione, produzione e distribuzione di prodotti a base di Aloe Vera. Ci siamo sempre dedicati alla ricerca delle migliori risorse naturali per il benessere e la bellezza al fine di condividerle con il mondo intero. Con l'impegno a mantenere alti gli standard di purezza e qualità, siamo determinati ad aiutare le persone nel mondo a sentirsi e a vedersi meglio. </p>
<img src= {Aloe} class='aloe contain' alt='Pianta Aloe'>
<p>Ci sono oltre 400 specie di piante di aloe, ma solo una proclamata come la migliore, l'aloe vera. L'Aloe Vera è stata celebrata per secoli per le sue proprietà lenitive e idratanti.
    L'aloe vera ha notevoli benefici che ti aiutano ad avere un aspetto migliore e sentirti meglio dentro e fuori. Creiamo i nostri prodotti con aloe di alta qualità, certificati IASC, utilizzando solo il gel di interno alla foglia, che viene sfilettata a mano e lavorata entro poche ore dalla raccolta, in modo da ottenere l'aloe come natura vuole</p>

{#each Prodotti as products }
    <img src={products} class='Prodotti contain' alt='Arginina'>
{/each}
<p>Forever è determinata nel fornire i migliori prodotti disponibili sul mercato di oggi. Ci teniamo a mantenere i più alti standard possibili e se non riusciamo a trovarli, allora li creiamo!</p>
<p>Avviare un'attività con Forever ti dà la possibilità di guadagnare un reddito extra fino a potenziali elevati, in base al tempo e all’impegno che potrai dedicarci. Inoltre, potrai qualificarti agli incentivi Forever che ti offriranno l’opportunità di bonus extra, viaggi verso le migliori destinazioni del mondo e formazione specializzata dai migliori leader.</p>

<p>Se anche voi volete:</p>

<table>
    <tr class='containerA fullWidth'>
        <td class='descrizione'>
            <p>Cliente "Normale" = Cliente Club</p>
            <ul>
                <li>Il tipo di registrazione pensato per chi vuole acquistare i prodotti Forever Living Products</li>
                <li> Nessuno Sconto</li>
                <li>Nessun minimo d'ordine</li>
                <li>Nessun obbligo di riacquisto</li>
            </ul>
        </td>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <td class='link'><span on:click={() => openInNewTab('https://shop.foreverliving.it/registrazione-sponsorizzata-cliente-390300057970.html')}>Clienti CLUB</span></td>
    </tr>
    <tr class='containerG fullWidth'>
        <td class='descrizione'>
            <p> Cliente Premium = Cliente con lo sconto</p>
            <ul>
                <li>Per chi vuole avere i prodotti Forever al prezzo scontato</li>
                <li>Si comincia con 5% di sconto con l'opzione di aumentarlo a 30% diventando cliente Gold</li>
                <li>Primo ordine minimo da acquistare prodotti per minimo 0,5 CC (circa 150€, questo dipende dalla scelta dei prodotto, vedi esempi qui sotto)</li>
                <li>Nessun obbligo di riacquisto</li>
                <li>Con questa registrazione NON si può lavorare con Forever</li>
                <li>Chi non è contento con il proprio consulente personale(sponsor) può cambiarlo dopo 6 mesi dall'ultimo acquisto</li>
                <li>Ogni prodotto ha un valore CC che si può vedere nello shop forever</li>
                <li>Non si pagano le spese di spedizione per il primo acquisto</li>
        </ul></td>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <td class='link'><span on:click={() => openInNewTab('https://shop.foreverliving.it/registrazione-sponsorizzata-cliente-premium-390300057970.html')}>Clienti Premium</span></td>
    </tr>
    <tr class='containerA fullWidth'>
        <td class='descrizione'>
            <p>Incaricato alle vendite Forever</p>
            <ul>
                <li>Questo tipo di registrazione è per chi vuole lavorare con la Forever Living Products</li>
                <li>Si comincia con 5% di sconto e 5% di provvigione (si viene chiamato Promoter Forever)</li>
                <li>Primo ordine minimo da acquistare il Starter Kit Forever per 9,89€ per chi si registra e ha più di 35 anni</li>
                <li>Nessun obbligo di riacquisto</li>
                <li>Nessun obbligo di fatturato (ma certo: chi non lavora non guadagna)</li>
                <li>La migliore scelta per il primo ordine è lo Start Your Journey Pack(dettagli vcedi foro in basso) - in tal caso risparmi anche i 9,89€ per lo Starter Kit</li>
                <li>Dopo 2 CC fatti in 2 mesi consecutivi solari puoi anche registrare nuovi incaricati e crearti un team tuo</li>
                <li>Non si pagano le spese di spedizione sul primo acquisto</li>
            </ul>
        </td>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <td class='link'><span on:click={() => openInNewTab('https://shop.foreverliving.it/registrazione-sponsorizzata-utente-390300057970.html')}>Incaricati Alle Vendite</span></td>
    </tr>
</table>
</body>

<style>
    table{
        margin-bottom: 50px;
    }
    .logo{
        height: 300px;
    }
    .aloe{
        width: 300px;
        height: 200px;
    }
    .Prodotti{
        width: 200px;
        height: 200px;
    }
    .descrizione{
        width: 70%;
        height: auto;
    }
    .link{
        width: 30%;
        height: auto;
    }
    .containerA{
        background-color: deepskyblue;
    }
    .containerG{
        background-color: yellow;
    }
    tr{
        border-top: 12px solid white;
        border-bottom: 12px solid white;          
    }
</style>