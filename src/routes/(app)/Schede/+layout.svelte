<script>
    import {ricetteShower, schedeShower} from '$lib/Store';
    import Buttons from "$lib/Schede/Buttons.svelte";

    ricetteShower.update(() => {
            return 'false';
        });
    schedeShower.update(() => {
            return 'false';
        });
        let showUomo = false;
        let showDonna = false;

    function handleClick(event){
        if (event == 'uomo'){
            showUomo = !showUomo;
        } else if (event == 'donna'){
            showDonna = !showDonna;
        }
    }

</script>

<body>
<slot></slot>
<div class='wrapper'>
    <div class='container'>
        <button on:click={() => {handleClick('uomo')}}>Uomo</button>
        {#if showUomo}
            <Buttons gender=0/>
        {/if}
    </div>
    <div class='container'>
        <button on:click={() => {handleClick('donna')}}>Donna</button>
        {#if showDonna}
            <Buttons gender=1/>            
        {/if}
    </div>
    </div>
</body>

<style>
    body{
		position: relative;
		top: 60px;
		padding-bottom: 300px;
	}
    button {
        background: #7F3DF6;
        background-image: -webkit-linear-gradient(top, #7F3DF6, #3DF6CB);
        background-image: -moz-linear-gradient(top, #7F3DF6, #3DF6CB);
        background-image: -ms-linear-gradient(top, #7F3DF6, #3DF6CB);
        background-image: -o-linear-gradient(top, #7F3DF6, #3DF6CB);
        background-image: -webkit-gradient(to bottom, #7F3DF6, #3DF6CB);
        -webkit-border-radius: 25px;
        -moz-border-radius: 25px;
        border-radius: 25px;
        height: 0;
        line-height: 0;
        color: black;
        font-family: Times New Roman;
        width: 600px;
        font-size: 40px;
        font-weight: 100;
        padding: 27px;
        -webkit-box-shadow: -6px -6px 11px 0 #99C624;
        -moz-box-shadow: -6px -6px 11px 0 #99C624;
        box-shadow: -6px -6px 11px 0 #99C624;
        text-shadow: -5px 5px 15px #000000;
        border: groove #0059A0 3px;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        text-align: center;
    }
    button:hover {
        border: groove #337FED 3px;
        background: #241ED0;
        background-image: -webkit-linear-gradient(top, #241ED0, #3D94F6);
        background-image: -moz-linear-gradient(top, #241ED0, #3D94F6);
        background-image: -ms-linear-gradient(top, #241ED0, #3D94F6);
        background-image: -o-linear-gradient(top, #241ED0, #3D94F6);
        background-image: -webkit-gradient(to bottom, #241ED0, #3D94F6);
        -webkit-border-radius: 25px;
        -moz-border-radius: 25px;
        border-radius: 25px;
        text-decoration: none;
    }
    .wrapper{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
        margin-bottom: 150px;
    }
    .container{
        display: flex;
        width:600px;
        flex-wrap: wrap;
    }
</style>