
//Tâche 01 : Itérer avec Async/Await

async function iterateWithAsyncAwait(values) {
    for (let i = 0; i < values.length; i++) {
      console.log(values[i]);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Attente de 1 seconde
    }
  }
  
  iterateWithAsyncAwait([1, 2, 3, 4, 5]);
  
  
  //Tâche 02 : Attendre un appel
  async function awaitCall() {
    console.log('Début de l\'appel API...');
    
    // Simuler un appel API avec un délai de 2 secondes
    const apiResponse = await new Promise(resolve => 
      setTimeout(() => resolve({ data: 'Réponse de l\'API' }), 2000)
    );
    
    console.log('Données reçues:', apiResponse.data);
  }
  
  awaitCall();
  
  
  //Tâche 03 : Gérer les erreurs avec Async/Await
  async function awaitCall() {
    console.log('Début de l\'appel API...');
    
    try {
      // Simuler un appel API qui échoue après 2 secondes
      const apiResponse = await new Promise((resolve, reject) => 
        setTimeout(() => reject(new Error('Échec de l\'appel API')), 2000)
      );
      
      console.log('Données reçues:', apiResponse.data);
    } catch (error) {
      console.log('Erreur rencontrée:', error.message);
    }
  }
  
  awaitCall();
  
  
  //Tâche 04 : Attente de requêtes simultanées
  
  async function concurrentRequests() {
    try {
      const [response1, response2] = await Promise.all([
        new Promise(resolve => setTimeout(() => resolve('Données de l\'API 1'), 2000)),
        new Promise(resolve => setTimeout(() => resolve('Données de l\'API 2'), 3000)),
      ]);
      
      console.log('Résultats combinés:', response1, response2);
    } catch (error) {
      console.log('Erreur lors des requêtes simultanées:', error.message);
    }
  }
  
  concurrentRequests();
  
  