class Phone 
{
    constructor()
    {
        this.id = -1;
        this.name = "";
        this.brandID = -1;
        this.releaseYear = -1;
        this.releaseMonth = -1;
        this.typeID = -1;
        this.keyboard = false;
        this.sizeInch = -1;
        this.touchscreen = false;
        this.simID = -1;
        this.dualsim = false;
        this.memoryCardID = -1;
        this.memoryMB = -1;
        this.ramMB = -1;
        this.operatingSystemID = -1;
        this.operatingSystemVersion = -1;
        this.chipset = "";
        this.cpuGHz = -1;
        this.cores = -1;
        this.batterymAH = -1;
        this.cameraMP = -1;
        this.cameraLED = false;
        this.radio = false;
        this.communicationIDs = [];
        this.sensorIDs = [];
    }

    get brand() 
    { 
        if (Data.instance.brands[this.brandID])
            return Data.instance.brands[this.brandID];
        else
            return new Brand(); 
    }

    get type()
    {
        if (Data.instance.types[this.typeID]) 
            return Data.instance.type[this.typeID];
        else
            return new Type();
    }

    get sim() 
    {
        if (Data.instance.sims[this.simID]) 
            return Data.instance.sims[this.simID];
        else
            return new Sim(); 
    }

    get memoryCard() 
    {
        if (Data.instance.memoryCards[this.memoryCardID]) 
            return Data.instance.memoryCards[this.memoryCardID];
        else
            return new MemoryCard();
    }

    get communications()
    {
        var communications = [];
        for (let i = 0; i < this.communicationIDs.length; i++)
            communications.push(Data.instance.communications[this.communicationIDs[i]]);
        return communications;
    }

    get sensors()
    {
        var sensors = [];
        for (let i = 0; i < this.sensorIDs; i++)
            sensors.push(Data.instance.sensors[this.sensorIDs[i]]);
        return sensors;
    }

    get operatingSystem() { return Data.instance.operatingSystems[this.operatingSystemID]; }

    static compareAttribute(phone1, phone2, attributeName)
    {
        switch (attributeName)
        {
            // ...
        }
    }
}

class Brand
{
    constructor()
    {
        this.id = -1;
        this.name = "";
    }
}

class Type
{
    constructor()
    {
        this.id = -1;
        this.name = "";
    }
}

class Sim
{
    constructor()
    {
        this.id = -1;
        this.name = "";
    }
}

class MemoryCard
{
    constructor()
    {
        this.id = -1;
        this.name = "";
    }
}

class OperatingSystem
{
    constructor()
    {
        this.id = -1;
        this.name = "";
    }
}

class Communication
{
    constructor()
    {
        this.id = -1;
        this.name = "";
    }
}