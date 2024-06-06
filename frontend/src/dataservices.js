import { writable } from 'svelte/store';
import yaml from 'js-yaml';


export const usersYaml = writable({});
export const teamsYaml = writable({});
export const productsYaml = writable({})
export const whoamiYaml = writable({})
export const mypersonasYaml = writable({})

let usersUri = "users_yaml"
let teamsUri = "teams_yaml"
let productsUri = "products_yaml"
let whoamiUri = "whoami_yaml"
let mypersonasUri = "mypersonas_yaml"

export const isLoadingUsersYaml = writable(true)
export const isLoadingTeamsYaml = writable(true)
export const isLoadingWhoami = writable(true)
export const isLoadingMyPersonasYaml = writable(true)

export async function readYamlFromWebService(url) {
    await readYamlFileFromWebService(url+usersUri, usersYaml);
    isLoadingUsersYaml.set(false)

    await readYamlFileFromWebService(url+teamsUri, teamsYaml);
    isLoadingTeamsYaml.set(false)
    
    readYamlFileFromWebService(url+whoamiUri, whoamiYaml);
    isLoadingWhoami.set(false)

    readYamlFileFromWebService(url+productsUri, productsYaml);
    
    readYamlFileFromWebService(url+mypersonasUri, mypersonasYaml);
    isLoadingMyPersonasYaml.set(false)


}

// export function speak(text) {
//   if ('speechSynthesis' in window) {
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.rate = 1; // You can adjust the rate
//     window.speechSynthesis.speak(utterance);
//   } else {
//     console.error("Text-to-Speech is not supported in this browser.");
//   }
// }


export async function readYamlFileFromWebService(url, datastore) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.text();
      const parsedData = yaml.load(data);

      datastore.set(parsedData);


    } else {
      console.error('Failed to fetch the YAML data:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error fetching the YAML data:', error);
  }
}