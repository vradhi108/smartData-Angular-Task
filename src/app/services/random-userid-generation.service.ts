import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomUseridGenerationService {

  constructor() { }

  generateUserId(): string {
    // Define the desired pattern for the user ID
    const pattern = 'USER-####';

    // Generate a random 4-digit number
    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    // Replace the '####' placeholder in the pattern with the random number
    return pattern.replace('####', randomNumber.toString());
  }
}
