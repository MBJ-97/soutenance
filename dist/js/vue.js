var app = new Vue({
    el: '#app',
    data: {
        isOpen: false,
        isFiltrd: false,
        isInfo: false,
        toggleMod:false,
        email: null,
        password: null,
        errors: [],

        },
    methods:{
        togNav: function() {

             this.isOpen = !this.isOpen;
            
        },
        filtShow: function() {

             this.isFiltrd = !this.isFiltrd;
            
        },
        infoShow: function() {
             this.isInfo = !this.isInfo;

        },
        toggleModal: function () {
            this.toggleMod = !this.toggleMod;
            console.log('it works');

        },
        checkForm: function (e) {
             
             if(this.email && this.password && this.password.length >= 8) {
                  return true;
                  console.log('fuck');
             }

             this.errors = [];

             if ( !this.email ) {
                  this.errors.push('Vous devez donner un email valide')
             } //emaill

               if ( !this.password ) {
                    this.errors.push('Avez-vous oublié de mettre le mot de passe ?');
               } //password
               e.preventDefault();

               if (this.password.length < 8) {

                    this.errors.push('Le mot de passe doit contenir plus de 8 caractères');

               };

          e.preventDefault();
        }
    }
})