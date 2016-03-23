class Vehicle {
    div: HTMLDivElement;
    value: number;
    damage: number;
    speed: number;
    // move: string; STRING? OR NUMBER?   
    remove: number;
    
    insert() {
        this.div = document.createElement('div');
        this.div.className = null;
        document.getElementById('containerDiv').appendChild(this.div);
    }
    
    moveDirection() {
        
    }
    
    damagePoints(){
        
    }
    
    speedSet(){
        
    }
    
    removeVehicle(){
              
    }  
}

class Car extends Vehicle { // USE 'SUPER' TO SHOW WHAT IS INHERITED UNCHANGED FROM VEHICLE?

}

class CopCar extends Vehicle { // USE 'SUPER' TO SHOW WHAT IS INHERITED UNCHANGED FROM VEHICLE?

}

class Motorcycle extends Vehicle { // USE 'SUPER' TO SHOW WHAT IS INHERITED UNCHANGED FROM VEHICLE?

}

class Tank extends Vehicle { // USE 'SUPER' TO SHOW WHAT IS INHERITED UNCHANGED FROM VEHICLE?

}