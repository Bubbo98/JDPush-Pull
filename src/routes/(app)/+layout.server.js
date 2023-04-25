import { error } from "@sveltejs/kit";
import {serializeNonPOJOs} from '$lib/utils'

export const load = ({ locals }) => {
        const getUsersCart = async (userId) => {
            try {
                const cart = serializeNonPOJOs(await locals.pb.collection('carrello').getFullList(undefined, {
                    filter: `user = "${userId}"`
                }))
                return cart
            } catch (err) {
                console.log('Error', err);
                throw error(err.status, err.message)
            }
        }   
        if (locals.pb.authStore.isValid) {
        return {
            carrello: getUsersCart(locals.pb.authStore.baseModel.id),
            Logo: '/Header/Logo.mp4',
        SchedeIcon: '/PrimaPagina/PulsantiSchede/Schede.png',
        RicetteIcon: '/PrimaPagina/PulsantiSchede/Ricette.png',
        ForeverIcon: '/PrimaPagina/PulsantiSchede/forever.png',
        TitleGym: '/PrimaPagina/PulsantiSchede/gym.png',
        TitleHome: '/PrimaPagina/PulsantiSchede/home.png',
        TitleCali: '/PrimaPagina/PulsantiSchede/cali.png',
        TitlePrimi: '/PrimaPagina/PulsantiRicette/PrimiTitle.png',
        TitleSecondi: '/PrimaPagina/PulsantiRicette/SecondiTitle.png',
        TitleDolci: '/PrimaPagina/PulsantiRicette/DolciTitle.png',
        ArrowUp: '/Carrello/ArrowUp.png',
        ArrowDown: '/Carrello/ArrowDown.png',
        Gallery: ["PrimaPagina/Gallery/JPush.mp4", "PrimaPagina/Gallery/JSdraiato.mp4"],
        UserIMG: '/Header/User.png',
        CartIMG: '/Header/Carrello.png',
        Collage: '/PrimaPagina/Presentazione/Collage.png',
        backPhotoJ: ["/SchedeJ/PalePrincipiante.jpeg","/SchedeJ/PaleAvanzato.jpeg","/SchedeJ/CasaPrincipiante.jpeg","/SchedeJ/CasaAvanzato.jpeg","/SchedeJ/CaliPrincipiante.jpeg","/SchedeJ/CaliAvanzato.jpeg"],
        backPhotoD: ["/SchedeD/PalePrincipiante.jpeg","/SchedeD/PaleAvanzato.jpeg","/SchedeD/CasaPrincipiante.jpeg","/SchedeD/CasaAvanzato.jpeg","/SchedeD/CaliPrincipiante.jpeg","/SchedeD/CaliAvanzato.jpeg"],
        ArrowLeft: '/Carrello/ArrowLeft.png',
        ArrowRight: '/Carrello/ArrowRight.png',
        LogoForever: '/Forever/LogoForever.jpeg',
        Aloe: '/Forever/Aloe.jpeg',
        Prodotti: ['/Forever/Argi.jpeg', '/Forever/LiteUltra.jpeg', '/Forever/Prodotti.jpeg'],
        Email: '/Footer/email.png',
        Instagram: '/Footer/Instagram.png',
        Joshua: '/Footer/JoshuaInsta.png',
        Denise: '/Footer/DeniseInsta.png',
        JDpushandpull: '/Footer/JDpushandpull.png',
        Home: '/PrimaPagina/PulsantiSchede/HomeCoppia.jpeg',
        Cali: '/PrimaPagina/PulsantiSchede/CaliCoppia.jpeg',
        Primi: '/PrimaPagina/PulsantiRicette/Primi.jpeg',
        Secondi: '/PrimaPagina/PulsantiRicette/Secondi.jpeg',
        Dolci: '/PrimaPagina/PulsantiRicette/Dolci.jpeg',
        HomeCoppia: '/PrimaPagina/PulsantiSchede/HomeCoppia.jpeg',
        GymCoppia: '/PrimaPagina/PulsantiSchede/GymCoppia.jpeg',
        CaliCoppia: '/PrimaPagina/PulsantiSchede/CaliCoppia.jpeg'
        }
    }

    return {
        carrello: [],
        Logo: '/Header/Logo.mp4',
        SchedeIcon: '/PrimaPagina/PulsantiSchede/Schede.png',
        RicetteIcon: '/PrimaPagina/PulsantiSchede/Ricette.png',
        ForeverIcon: '/PrimaPagina/PulsantiSchede/forever.png',
        TitleGym: '/PrimaPagina/PulsantiSchede/gym.png',
        TitleHome: '/PrimaPagina/PulsantiSchede/home.png',
        TitleCali: '/PrimaPagina/PulsantiSchede/cali.png',
        TitlePrimi: '/PrimaPagina/PulsantiRicette/PrimiTitle.png',
        TitleSecondi: '/PrimaPagina/PulsantiRicette/SecondiTitle.png',
        TitleDolci: '/PrimaPagina/PulsantiRicette/DolciTitle.png',
        ArrowUp: '/Carrello/ArrowUp.png',
        ArrowDown: '/Carrello/ArrowDown.png',
        Gallery: ["PrimaPagina/Gallery/JPush.mp4", "PrimaPagina/Gallery/JSdraiato.mp4"],
        UserIMG: '/Header/User.png',
        CartIMG: '/Header/Carrello.png',
        Collage: '/PrimaPagina/Presentazione/Collage.png',
        backPhotoJ: ["/SchedeJ/PalePrincipiante.jpeg","/SchedeJ/PaleAvanzato.jpeg","/SchedeJ/CasaPrincipiante.jpeg","/SchedeJ/CasaAvanzato.jpeg","/SchedeJ/CaliPrincipiante.jpeg","/SchedeJ/CaliAvanzato.jpeg"],
        backPhotoD: ["/SchedeD/PalePrincipiante.jpeg","/SchedeD/PaleAvanzato.jpeg","/SchedeD/CasaPrincipiante.jpeg","/SchedeD/CasaAvanzato.jpeg","/SchedeD/CaliPrincipiante.jpeg","/SchedeD/CaliAvanzato.jpeg"],
        ArrowLeft: '/Carrello/ArrowLeft.png',
        ArrowRight: '/Carrello/ArrowRight.png',
        LogoForever: '/Forever/LogoForever.jpeg',
        Aloe: '/Forever/Aloe.jpeg',
        Prodotti: ['/Forever/Argi.jpeg', '/Forever/LiteUltra.jpeg', '/Forever/Prodotti.jpeg'],
        Email: '/Footer/email.png',
        Instagram: '/Footer/Instagram.png',
        Joshua: '/Footer/JoshuaInsta.png',
        Denise: '/Footer/DeniseInsta.png',
        JDpushandpull: '/Footer/JDpushandpull.png',
        Home: '/PrimaPagina/PulsantiSchede/HomeCoppia.jpeg',
        Cali: '/PrimaPagina/PulsantiSchede/CaliCoppia.jpeg',
        Primi: '/PrimaPagina/PulsantiRicette/Primi.jpeg',
        Secondi: '/PrimaPagina/PulsantiRicette/Secondi.jpeg',
        Dolci: '/PrimaPagina/PulsantiRicette/Dolci.jpeg',
        HomeCoppia: '/PrimaPagina/PulsantiSchede/HomeCoppia.jpeg',
        GymCoppia: '/PrimaPagina/PulsantiSchede/GymCoppia.jpeg',
        CaliCoppia: '/PrimaPagina/PulsantiSchede/CaliCoppia.jpeg'
    }
}