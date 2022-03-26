<template lang="">
    <navbar/>
    <div>
        <h1 class="text-center" >Funcion de login</h1>
        <h1>USUARIO {{user}}</h1>
        <button class="caret-gray-400" @click="login">Login</button>
        <br>
        <button class="caret-gray-400" @click="logout">logout</button>
    </div>
    <div>
        <h1 class="text-center">Añadir coche</h1>
        <carForm/>
    </div>
    <div>
        <h1 class="text-center">test1</h1>
    </div>
</template>

<script>
    import navbar from '@/components/Navbar.vue'
    import carForm from '@/components/Form.vue'
    import firebase from 'firebase/compat/app'
    import { mapGetters } from 'vuex'

    export default {
        components: {
            navbar,
            carForm
        },
        data: () => ({
            
        }),
        mounted () {
            console.log(this.$store.getters.user);
            console.log(this.$store.getters.user.data);
        },
        methods: {
            login () {

                let provider = new firebase.auth.GoogleAuthProvider();

                firebase.auth().signInWithRedirect(provider)

                // firebase.auth().signInWithPopup(provider).then((result) => {
                //     let token = result.credential.accessToken;
                //     let user = result.user;
                //     console.log(token) // Token
                //     console.log(user.displayName) // User that was authenticated
                //     console.log(user.email)
                //     console.log(user.uid);
                //     console.log(this.$store.getters.user);
                // }).catch((err) => {
                //     console.log(err); // This will give you all the information needed to further debug any errors
                // });

            },
            test () {
                firebase.auth().createUserWithEmailAndPassword('l9iamunnder@gmail.com','testing1234').then(response => {
                    console.log(response);
                })
            },
            logout() {
                firebase.auth().signOut()
            }
        },
        computed: {
            ...mapGetters({
                user: "user"
            })
        }
    }
</script>

<style lang="">
    
</style>