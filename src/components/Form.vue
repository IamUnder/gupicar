<template lang="">
    <!-- component -->
    <div class="p-5">
        <!-- Stepper -->
        <div class="mx-4 p-4">
            <div class="flex items-center">
                <div class="flex items-center text-black relative">
                    <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600 border-blue-700 bg-blue-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark ">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </div>
                    <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Basico</div>
                </div>
                <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600" :class="{ 'border-blue-300' : step > 0 }"></div>
                <div class="flex items-center text-blue relative">
                    <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600 border-blue-700 " :class="{ 'bg-blue-300' : step > 0 }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark ">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </div>
                    <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Avanzado</div>
                </div>
                <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300" :class="{ 'border-blue-300' : step > 1 }"></div>
                <div class="flex items-center text-black relative">
                    <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-blue-700" :class="{ 'bg-blue-300' : step > 1 }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail ">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </div>
                    <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-black">Imagenes</div>
                </div>
                <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300" :class="{ 'border-blue-300' : step > 2 }"></div>
                <div class="flex items-center text-black relative">
                    <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-blue-700" :class="{ 'bg-blue-300' : step > 2 }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-database ">
                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                        </svg>
                    </div>
                    <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-black">Resumen</div>
                </div>
            </div>
        </div>
        <!-- !Stepper -->
        <!-- Primer seccion -->
        <div class="mt-8 p-4" v-if="step == 0">
            <div>
                <div class="flex flex-col md:flex-row">
                    <div class="w-full flex-1 mx-2 ">
                        <div class="font-bold text-black text-xs leading-8 uppercase h-6 mx-2 mt-3">Marca</div>
                        <div v-if="!otraMarca" class=" my-2 p-1 flex rounded border relative">
                            <svg class="absolute right-2 top-2 pointer-events-none h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                            <select class="p-1 px-2 appearance-none outline-none w-full text-gray-800 form-select" ref="marca" @change="setMarca()">
                                <option disabled selected value="0">Seleccione una marca</option>
                                <option v-for="mar in marcas" :value="mar.nome" :key="mar.codigo">{{mar.nome}}</option>
                                <option value="otro">Otra</option>
                            </select>
                        </div>
                        <div v-else class="bg-white my-2 p-1 flex border border-gray-200 rounded ">
                            <input placeholder="Añade una marca" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="marca"> 
                        </div>
                    </div>
                    <div class="w-full flex-1 mx-2 ">
                        <div class="font-bold text-black text-xs leading-8 uppercase h-6 mx-2 mt-3">Modelo</div>
                        <div v-if="!otroModelo" class=" my-2 p-1 flex rounded border relative">
                            <svg class="absolute right-2 top-2 pointer-events-none h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                            <select class="p-1 px-2 appearance-none outline-none w-full text-gray-800 form-select" ref="modelo" @change="setModelo()">
                                <template v-if="modelos.length == 0">
                                    <option disabled selected value="0">Seleccione una marca primero</option>
                                </template>
                                <template v-else>
                                    <option disabled selected value="0">Seleccione un modelo</option>
                                    <option v-for="model in modelos" :value="modelo.Model_Name" :key="model.Model_ID">{{model.Model_Name}}</option> 
                                    <option value="otro">Otro</option>
                                </template>
                            </select>
                        </div>
                        <div v-else class="bg-white my-2 p-1 flex border border-gray-200 rounded ">
                            <input placeholder="Añade un modelo" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="modelo"> 
                        </div>
                    </div>
                    <div class="w-full flex-1 mx-2 ">
                        <div class="font-bold text-black text-xs leading-8 uppercase h-6 mx-2 mt-3">Nombre a mostrar</div>
                        <div class="bg-white my-2 p-1 flex border border-gray-200 rounded ">
                            <input v-if="modelo != ''" v-model="version" placeholder="Titulo anuncio" class="p-1 px-2 appearance-none outline-none w-full text-gray-800"> 
                            <input v-else placeholder="Selecciona modelo primero" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" disabled> 
                        </div>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row">
                    <div class="w-full mx-2 flex-1 ">
                        <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Kilometros</div>
                        <div class="bg-white my-2 p-1 flex border border-gray-200 rounded ">
                            <input type="number" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="kilometros"> </div>
                    </div>
                    <div class="w-full mx-2 flex-1 ">
                        <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Precio</div>
                        <div class="bg-white my-2 p-1 flex border border-gray-200 rounded ">
                            <input placeholder="precio" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="precio"> </div>
                    </div>
                    <div class="w-full mx-2 flex-1 ">
                        <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Precio especial</div>
                        <div class="bg-white my-2 p-1 flex border border-gray-200 rounded ">
                            <input placeholder="precio especial" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="precioEspecial"> </div>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row">
                    <div class="w-full mx-2 flex-1 ">
                        <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Año</div>
                        <div class="bg-white my-2 p-1 flex border border-gray-200 rounded ">
                            <input type="number" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="ano"> </div>
                    </div>
                    <div class="w-full mx-2 flex-1 ">
                        <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Combustible</div>
                        <div class=" my-2 p-1 flex rounded border relative">
                            <svg class="absolute right-2 top-2 pointer-events-none h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                            <select class="p-1 px-2 appearance-none outline-none w-full text-gray-800 form-select" v-model="combustible">
                                <option value="Gasolina">Gasolina</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Hibrido">Hibrido</option>
                                <option value="Electrico">Electrico</option>
                            </select>
                        </div>
                    </div>
                    <div class="w-full mx-2 flex-1 ">
                        <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Carroceria</div>
                        <div class=" my-2 p-1 flex rounded border relative">
                            <svg class="absolute right-2 top-2 pointer-events-none h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                            <select class="p-1 px-2 appearance-none outline-none w-full text-gray-800 form-select" v-model="carroceria">
                                <option value="Berlina">Berlina</option>
                                <option value="Familiar">Familiar</option>
                                <option value="Coupe">Coupe</option>
                                <option value="Monovolumen">Monovolumen</option>
                                <option value="4x4 SUV">4x4 SUV</option>
                                <option value="Cabrio">Cabrio</option>
                                <option value="Pick Up">Pick Up</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-8 p-4" v-if="step == 1">
            <h1>Datos avanzados</h1>
            <div class="flex flex-col md:flex-row">
                <div class="w-full mx-2 flex-1 ">
                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Transmisión</div>
                    <div class=" my-2 p-1 flex rounded border relative">
                        <svg class="absolute right-2 top-2 pointer-events-none h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        <select class="p-1 px-2 appearance-none outline-none w-full text-gray-800 form-select" v-model="transmision">
                            <option value="Manual">Manual</option>
                            <option value="Automático">Automático</option>
                        </select>
                    </div>
                </div>
                <div class="w-full mx-2 flex-1 ">
                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Tracción</div>
                    <div class=" my-2 p-1 flex rounded border relative">
                        <svg class="absolute right-2 top-2 pointer-events-none h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        <select class="p-1 px-2 appearance-none outline-none w-full text-gray-800 form-select" v-model="traccion">
                            <option value="Trasera">Trasera</option>
                            <option value="Delantera">Delantera</option>
                            <option value="4x4">4x4</option>
                        </select>
                    </div>
                </div>
                <div class="w-full mx-2 flex-1 ">
                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Numero de puertas</div>
                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded ">
                        <input type="number" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="puertas"> </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row">
                <div class="w-full mx-2 flex-1 ">
                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Color</div>
                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded ">
                        <input placeholder="Color del vehiculo" type="text" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="color"> </div>
                </div>
                <div class="w-full mx-2 flex-1 ">
                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Motor</div>
                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded ">
                        <input placeholder="Tipo de motor" type="text" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="motor"> </div>
                </div>
                <div class="w-full mx-2 flex-1 ">
                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Potencia</div>
                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded ">
                        <input placeholder="Potencia del vehiculo" type="text" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="potencia"> </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row">
                <div class="w-full mx-2 flex-1 ">
                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Estado</div>
                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded ">
                        <input type="text" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="estado"> </div>
                </div>
                <div class="w-full mx-2 flex-1 ">
                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Garantia</div>
                    <div class=" my-2 p-1 flex rounded border relative">
                        <svg class="absolute right-2 top-2 pointer-events-none h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        <select class="p-1 px-2 appearance-none outline-none w-full text-gray-800 form-select" v-model="garantia">
                            <option select value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </div>
                <div class="w-full mx-2 flex-1 ">
                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Periodo de garantia</div>
                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded ">
                        <input v-if="garantia == 'Si'" placeholder="Periodo de garantia" type="text" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="periodoGarantia"> 
                        <input v-else placeholder="No has selecionado garantia" type="text" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" disabled> 
                    </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row">
                <div class="w-full mx-2 flex-1 ">
                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">Descripción</div>
                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded ">
                        <textarea placeholder="Descripción del vehiculo..." class="p-1 px-2 appearance-none outline-none w-full text-gray-800" v-model="descripcion"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-8 p-4" v-if="step == 2">
            <h1>Imagenes</h1>
        </div>
        <div class="mt-8 p-4" v-if="step == 3">
            <h1>Resumen</h1>
        </div>
        <!-- <div class="mt-8 p-4">           
        </div> -->
        <div class="mt-8 p-4">
            <div class="flex p-2 mt-4">
                <button @click="previus()" class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-gray-200  bg-gray-100 text-gray-700 border duration-200 ease-in-out border-gray-600 transition">Paso anterior</button>
                <div class="flex-auto flex flex-row-reverse">
                    <button @click="setCar()" class="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-600  bg-teal-600 text-teal-100 border duration-200 ease-in-out border-teal-600 transition">Comprobar campos</button>
                </div>
                <div class="flex-auto flex flex-row-reverse">
                    <button @click="next()" class="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-600  bg-teal-600 text-teal-100 border duration-200 ease-in-out border-teal-600 transition">Paso siguiente</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import { db } from '../main.js'
    import { doc, setDoc, getDocs, collection, query, where } from "firebase/firestore/lite"

    export default {
        data: () => ({
            step: 0,
            marcas: [],
            modelos: [],
            otraMarca: false, 
            otroModelo: false,
            marca: '',
            modelo: '',
            version: '',
            kilometros: '',
            precio: '',
            precioEspecial: '',
            ano: '',
            combustible: 'Diesel',
            carroceria: 'Berlina',
            transmision: 'Manual',
            traccion: 'Trasera',
            puertas: '',
            color: '',
            motor: '',
            potencia: '',
            estado: 'Como nuevo',
            garantia: 'Si',
            periodoGarantia: '',
            descripcion: '',
            imgInterior: [],
            imgExterior: []
        }),
        methods: {
            next () {
                if (this.step < 3) this.step++
            },
            previus () {
                if (this.step != 0) this.step--
            },
            async setCar () {

                let fecha = new Date()

                let car = {
                    marca: this.marca,
                    modelo: this.modelo,
                    version: this.version,
                    kilometros: this.kilometros,
                    precio: this.precio,
                    precioEspecial: this.precioEspecial,
                    ano: this.ano,
                    combustible: this.combustible,
                    carroceria: this.carroceria,
                    transmision: this.transmision,
                    traccion: this.traccion,
                    puertas: this.puertas,
                    color: this.color,
                    motor: this.motor,
                    potencia: this.potencia,
                    estado: this.estado,
                    garantia: this.garantia,
                    periodoGarantia: this.periodoGarantia,
                    descripcion: this.descripcion,
                    imgInterior: this.imgInterior,
                    imgExterior: this.imgExterior,
                    destacado: false,
                    date: fecha.toLocaleDateString(),
                    modified: fecha.toLocaleDateString()
                }

                if (this.otraMarca) {

                    let q = query(collection(db, 'marcas'),where('nome','==',this.marca))
                    let isSaved = await getDocs(q)
                    if (isSaved._docs.length == 0) {
                        let uid = this.uid()
                        const docRef = doc(db, 'marcas', uid)
                        setDoc(docRef, {
                            nome: this.marca,
                            codigo: uid
                        })
                    }
                    
                }

                if (this.otroModelo) {
                    
                    let q = query(collection(db, 'modelos'),where('Model_Name','==',this.modelo),where('marca','==',this.marca))
                    let isSaved = await getDocs(q)
                    if (isSaved._docs.length == 0) {
                        let uid = this.uid()
                        const docRef = doc(db, 'modelos', uid)
                        setDoc(docRef, {
                            Model_Name: this.modelo,
                            Model_ID: uid,
                            marca: this.marca
                        })
                    }

                }

                // Si todo esta bien, guardamos el vehiculo
                let uid = this.uid()
                const docRef = doc(db, 'vehiculos', uid)
                setDoc(docRef, car)

            },
            setMarca () {
                
                // Version de otra marca
                if (this.$refs.marca.value == 'otro') {
                    this.marca = ''
                    this.modelo = ''
                    this.otraMarca = true;
                    this.otroModelo = true;
                } else {
                    this.marca = this.$refs.marca.value;

                    // Areglo de marcas
                    if (this.marca == 'VW - VolksWagen') this.marca = 'Volkswagen'
                    if (this.marca == 'Rolls-Royce') this.marca = 'Rolls Royce'

                    this.getModelos(this.marca)
                }


            },
            setModelo () {

                if (this.$refs.modelo.value == 'otro') {
                    this.modelo = ''
                    this.otroModelo = true;
                } else {
                    this.modelo = this.$refs.modelo.value
                }

            },
            async getModelos (marca) {

                await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/' + marca + '?format=json',).then(response => {
                    this.modelos = response.data.Results
                })

                let q = query(collection(db, 'modelos'),where('marca','==',marca))
                let firebase = await getDocs(q)
                let firebaseModelos = []
                firebase._docs.forEach(doc => {
                    firebaseModelos.push(doc.data())
                })

                this.modelos = this.modelos.concat(firebaseModelos)
                this.modelos.sort(this.compareModelos)
            },
            async getMarcas() {
                await axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas').then(response => {
                    this.marcas = response.data
                })

                let firebase = await getDocs(collection(db, 'marcas'))
                let firebaseMarcas = []
                firebase.forEach(doc => {
                    firebaseMarcas.push(doc.data())
                });

                this.marcas = this.marcas.concat(firebaseMarcas)
                this.marcas.sort(this.compareMarca)
            },
            uid () {
                return Math.random().toString(36).substr(2, 9)
            },
            compareMarca( a, b ) {
                if ( a.nome.toUpperCase() < b.nome.toUpperCase() ){
                    return -1;
                }
                if ( a.nome.toUpperCase() > b.nome.toUpperCase() ){
                    return 1;
                }
                return 0;
            },
            compareModelo( a, b ) {
                if ( a.Model_Name.toUpperCase() < b.Model_Name.toUpperCase() ){
                    return -1;
                }
                if ( a.Model_Name.toUpperCase() > b.Model_Name.toUpperCase() ){
                    return 1;
                }
                return 0;
            }
        },
        mounted () {
            this.getMarcas();
        }
    }
</script>

<style lang="">
    
</style>