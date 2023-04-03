export class Ammo{
    Id;
    Name;
    Caliber;
    Damage;
    Weight;
    StackMaxSize;
    Tracer;
    TracerColor;
    AmmoType;
    ProjectileCount;
    ArmorDamage;
    FragmentationChance;
    RicochetChance;
    PenetrationChance;
    PenetrationPower;
    Accuracy;
    Recoil;
    InitialSpeed;

    constructor(id,name, caliber, damage, weight, stacksize, tracer, tracercolor,ammotype,projcount,armordamage,fragchance,ricochance,penchance,penpower,accuracy,recoil,initialspeed){
        this.Id = id;
        this.Name = name;
        this.Caliber = caliber;
        this.Damage = damage;
        this.Weight = weight;
        this.StackMaxSize = stacksize;
        this.Tracer = tracer;
        this.TracerColor = tracercolor;
        this.AmmoType = ammotype;
        this.ProjectileCount = projcount;
        this.ArmorDamage = armordamage;
        this.FragmentationChance = fragchance;
        this.RicochetChance = ricochance;
        this.PenetrationChance = penchance;
        this.PenetrationPower = penpower;
        this.Accuracy = accuracy;
        this.Recoil = recoil;
        this.InitialSpeed = initialspeed;
    }
  }