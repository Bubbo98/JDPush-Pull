<script>
    import Logo from "$lib/Header/Logo.svelte";
    import Title from "$lib/Header/Title.svelte";
    import Buttons from "$lib/Header/Buttons.svelte";
    import VanishingHeader from "$lib/Header/VanishingHeader.svelte";
    import './global.css'
    import {setContext} from 'svelte';
    import EmailForm from "$lib/Email/EmailForm.svelte";

    /** @type {import('./$types').LayoutLoad} */
    export let data;

    setContext('Logo', data.Logo);
    setContext('SchedeIcon', data.SchedeIcon);
    setContext('RicetteIcon', data.RicetteIcon);
    setContext('ForeverIcon', data.ForeverIcon);
    setContext('TitleGym', data.TitleGym);
    setContext('TitleHome', data.TitleHome);
    setContext('TitleCali', data.TitleCali);
    setContext('ArrowUp', data.ArrowUp);
    setContext('ArrowDown', data.ArrowDown);
    setContext('Gallery', data.Gallery);
    setContext('UserIMG', data.UserIMG);
    setContext('CartIMG', data.CartIMG);
    setContext('Collage', data.Collage);
    setContext('backPhotoJ', data.backPhotoJ);
    setContext('backPhotoD', data.backPhotoD);
    setContext('ArrowLeft', data.ArrowLeft);
    setContext('ArrowRight', data.ArrowRight);
    setContext('LogoForever', data.LogoForever);
    setContext('Aloe', data.Aloe);
    setContext('Prodotti', data.Prodotti);
    setContext('Primi', data.Primi);
    setContext('Secondi', data.Secondi);
    setContext('Dolci', data.Dolci);
    setContext('HomeCoppia', data.HomeCoppia);
    setContext('GymCoppia', data.GymCoppia);
    setContext('CaliCoppia', data.CaliCoppia);
    setContext('TitlePrimi', data.TitlePrimi);
    setContext('TitleSecondi', data.TitleSecondi);
    setContext('TitleDolci', data.TitleDolci);

    let btnEmail = 'fullWidth marginLeft';
    let btnInsta = 'Scritta';
    let btnClick = false;

    
    function handleOver(e){
        if (e === 'I'){
            btnInsta = 'btn-enanced Scritta';
        } else if (e === 'E'){
            btnEmail = 'btn-enanced fullWidth marginLeft'
        }
    }
    function handleOut(e){
        if (e === 'I'){
            btnInsta = 'Scritta';
        } else if (e === 'E'){
            btnEmail = 'fullWidth marginLeft'
        }
    }
    function handleClickClose(){
        btnClick = !btnClick;
    }
    function handleClick(){
        btnClick = !btnClick;
    }
</script>


<main>
    <header>
        <VanishingHeader duration='250ms' offset={50} tolerance={5}>
            <div class="widthHeader">
                <Logo />
            </div>
            <div class="fullHeight lineHeightTitleH textAlignCenter titleH">
                <Title />
            </div>
            <div class="flexSpaceAroundRow alignItemsCenter widthHeader fullHeight">
                <Buttons />
            </div>
        </VanishingHeader>
    </header>
        <slot></slot>
    <footer>
        <div class='footer'>
            <div class='titleF lineHeightTitleF textAlignCenter'>
                <Title />
            </div>
            <div class='wrapper fullWidth grid alignItemsCenter white'>
                <div class='gridFirstRFirstC flexColumn textAlignCenter alignItemsCenter'>
                    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                    <span class='flexCenter fullWidth c' on:mouseover={() => handleOver('E')} on:mouseout={() => handleOut('E')}><img src={data.Email} class='imgContain' alt='E-mail'></span>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div class='fullWidth' on:click={handleClick}><img src={data.JDpushandpull} class='{btnEmail}' alt=""></div>
                    {#if btnClick}
                        <div class='EmailForm' >
                            <EmailForm on:close={handleClickClose}/>
                        </div>
                    
                    {/if}
                </div>
                <div class='gridFirstRSecondC grid textAlignCenter alignItemsCenter gridSquare'>
                    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                    <span class='flexCenter c' on:mouseover={() => handleOver('I')} on:mouseout={() => handleOut('I')}><img src={data.Instagram} class='imgContain' alt='Instagram'></span>
                    <a href='https://instagram.com/mauriziojoshuapt?igshid=YmMyMTA2M2Y=' class='gridSecondRFirstC'><img src={data.Joshua}  class='{btnInsta}' alt=""></a>
                    <a href='https://instagram.com/lamendye?igshid=YmMyMTA2M2Y=' class='gridSecondRSecondC'><img src={data.Denise} class='{btnInsta}' alt=""></a>
                </div>
            </div>
            <div class='info white textAlignCenter'>
                <span>P.IVA: 12717010966 - Sede Legale: Largo Camillo Caccia Dominioni 3 </span>
            </div>
        </div>
    </footer>
</main>

<style>
    .titleH{
        width: 80%;
    }
    .titleF{
        grid-area: 1 / 1 / 1 / span 3;
    }
    .wrapper{
        grid-area: 2 / 1 / 2 / span 3;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }
    .info{
        grid-area: 3 / 2 / 3 / 2;
    }
    .c{
        grid-area: 1 / 1 / 1 / span 2;
    }
    .Scritta{
        width: 120px;
    }
    .marginLeft{
        margin-left: 20px;
        cursor: pointer;
    }
</style>