
export const useConversionMoneda = () => {
    const listaMonedas = () =>
    {
        const listaDivisas = `[
        {
            "sigla": "BOB",
            "nombre": "Boliviano"
        },
        {
            "sigla": "CLP",
            "nombre": "Peso Chileno"
        },
        {
            "sigla": "MXN",
            "nombre": "Peso Mexicano"
        },
        {
            "sigla": "ARS",
            "nombre": "Peso Argentino"
        },
        {
            "sigla": "PEN",
            "nombre": "Nuevo Sol"
        },
        {
            "sigla": "BRL",
            "nombre": "Real Brasileño"
        }
        ]`;
        return JSON.parse(listaDivisas);
    }

    const convertirDivisa = (montoDinero, de, a) =>
    {
        if (montoDinero.length < 1) 
        {
            alert('Debe ingresar la cantidad a convertir');
        }
        else
        {
            let resultado = 0; // variable donde se enviará el resultado

            // Establecemos el tipo de cambio oficial de las diferentes divisas
            let pesoChileno = 120.10; // 1 boliviano equivale a 120.10 pesos chilenos
            let pesoMexicano = 2.44; // 1 boliviano equivale a 2.44 pesos mexicanos
            let pesoArgentino = 39.28; // 1 boliviano equivale a 39.28 pesos argentinos
            let soles = 0.54; // 1 boliviano equivale a 0.54 soles
            let realBrasileno = 0.71 // 1 boliviano equivale a 0.71 reales brasileños

            // De Bolivianos a Pesos Chilenos
            if (de === "BOB" && a === "CLP") 
            {
                resultado = montoDinero * pesoChileno;
            }
            // De Bolivianos a Pesos Mexicanos
            else if (de === "BOB" && a === "MXN")
            {
                resultado = montoDinero * pesoMexicano;
            }
            // De Bolivianos a Pesos Argentinos
            else if (de === "BOB" && a === "ARS")
            {
                resultado = montoDinero * pesoArgentino;
            }
            // De Bolivianos a Nuevos Soles
            else if (de === "BOB" && a === "PEN")
            {
                resultado = montoDinero * soles;
            }
            // De Bolivianos a Reales Brasileños
            else if (de === "BOB" && a === "BRL")
            {
                resultado = montoDinero * realBrasileno;
            }
            // De Pesos Chilenos a Bolivianos
            else if (de === "CLP" && a === "BOB")
            {
                resultado = montoDinero / pesoChileno;
            }
            // De Pesos Chilenos a Pesos Mexicanos
            else if (de === "CLP" && a === "MXN")
            {
                resultado = montoDinero * (pesoMexicano / pesoChileno);
            }
            // De Pesos Chilenos a Pesos Argentinos
            else if (de === "CLP" && a === "ARS")
            {
                resultado = montoDinero * (pesoArgentino / pesoChileno);
            }
            // De Pesos Chilenos a Nuevos Soles
            else if (de === "CLP" && a === "PEN")
            {
                resultado = montoDinero * (soles / pesoChileno);
            }
            // De Pesos Chilenos a Reales Brasileños
            else if (de === "CLP" && a === "BRL")
            {
                resultado = montoDinero * (realBrasileno / pesoChileno);
            }
            // De Pesos Mexicanos a Bolivianos
            else if (de === "MXN" && a === "BOB")
            {
                resultado = montoDinero / pesoMexicano;
            }
            // De Pesos Mexicanos a Pesos Chilenos
            else if (de === "MXN" && a === "CLP")
            {
                resultado = montoDinero * (pesoChileno / pesoMexicano);
            }
            // De Pesos Mexicanos a Pesos Argentinos
            else if (de === "MXN" && a === "ARS")
            {
                resultado = montoDinero * (pesoArgentino / pesoMexicano);
            }
            // De Pesos Mexicanos a Nuevos Soles
            else if (de === "MXN" && a === "PEN")
            {
                resultado = montoDinero * (soles / pesoMexicano);
            }
            // De Pesos Mexicanos a Reales Brasileños
            else if (de === "MXN" && a === "BRL")
            {
                resultado = montoDinero * (realBrasileno / pesoMexicano);
            }
            // De Pesos Argentinos a Bolivianos
            else if (de === "ARS" && a === "BOB")
            {
                resultado = montoDinero / pesoArgentino;
            }
            // De Pesos Argentinos a Pesos Chilenos
            else if (de === "ARS" && a === "CLP")
            {
                resultado = montoDinero * (pesoChileno / pesoArgentino);
            }
            // De Pesos Argentinos a Peso Mexicanos
            else if (de === "ARS" && a === "MXN")
            {
                resultado = montoDinero * (pesoMexicano / pesoArgentino);
            }
            // De Pesos Argentinos a Nuevos Soles
            else if (de === "ARS" && a === "PEN")
            {
                resultado = montoDinero * (soles / pesoArgentino);
            }
            // De Pesos Argentinos a Reales Brasileños
            else if (de === "ARS" && a === "BRL")
            {
                resultado = montoDinero * (realBrasileno / pesoArgentino);
            }
            // De Nuevos Soles a Bolivianos
            else if (de === "PEN" && a === "BOB")
            {
                resultado = montoDinero / soles;
            }
            // De Nuevos Soles a Pesos Chilenos
            else if (de === "PEN" && a === "CLP")
            {
                resultado = montoDinero * (pesoChileno / soles);
            }
            // De Nuevos Soles a Pesos Mexicanos
            else if (de === "PEN" && a === "MXN")
            {
                resultado = montoDinero * (pesoMexicano / soles);
            }
            // De Nuevos Soles a Pesos Argentinos
            else if (de === "PEN" && a === "ARS")
            {
                resultado = montoDinero * (pesoArgentino / soles);
            }
            // De Nuevos Soles a Reales Brasileños
            else if (de === "PEN" && a === "BRL")
            {
                resultado = montoDinero * (realBrasileno / soles);
            }
            // De Reales Brasileños a Bolivianos
            else if (de === "BRL" && a === "BOB")
            {
                resultado = montoDinero / realBrasileno;
            }
            // De Reales Brasileños a Pesos Chilenos
            else if (de === "BRL" && a === "CLP")
            {
                resultado = montoDinero * (pesoChileno / realBrasileno);
            }
            // De Reales Brasileños a Pesos Mexicanos
            else if (de === "BRL" && a === "MXN")
            {
                resultado = montoDinero * (pesoMexicano / realBrasileno);
            }
            // De Reales Brasileños a Pesos Argentinos
            else if (de === "BRL" && a === "ARS")
            {
                resultado = montoDinero * (pesoArgentino / realBrasileno);
            }
            // De Reales Brasileños a Nuevos Soles
            else if (de === "BRL" && a === "PEN")
            {
                resultado = montoDinero * (soles / realBrasileno);
            }
            else
            {
                resultado = montoDinero;
            }

            return resultado.toFixed(2);
        }
    }

    return {
        listaMonedas,
        convertirDivisa
    }
}
