import { useMeStore } from "@/stores/me";

export const redirecIfAuthenticated = (to,from,next) => {
    const meStore = useMeStore();
    if(meStore.isLoggedIn) {
        next({name:'dashboard'});
    } else {
        next();
    }
}

export const needAuthentication = (to,from,next) => {
    const meStore = useMeStore();
    if(!meStore.isLoggedIn) {
        next({name:'login'});
    } else {
        next();
    }
}

export const needVerifyEmailToken = (to,from,next) => {
    if(!to.query?.token) {
        next({name:'login'});
    } else {
        next();
    }
}

