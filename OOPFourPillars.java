/*
    OOP (Object-Oriented Programming)
    
    OOP ke 4 main pillars:

    1. Encapsulation
    2. Inheritance
    3. Polymorphism
    4. Abstraction
*/


// ============================================================
// 1. ENCAPSULATION
// ============================================================

/*
    Encapsulation:
    
    Data aur methods ko ek class ke andar bundle karna.
    
    Data ko directly access hone se rokne ke liye
    variables ko private rakhte hain.
    
    Access karne ke liye getter/setter methods use karte hain.
*/

class Student {

    // Private variables -> directly access nahi kar sakte
    private String name;
    private int age;

    // Setter
    public void setName(String name) {
        this.name = name;
    }

    // Getter
    public String getName() {
        return name;
    }

    // Setter
    public void setAge(int age) {
        this.age = age;
    }

    // Getter
    public int getAge() {
        return age;
    }
}


// ============================================================
// 2. INHERITANCE
// ============================================================

/*
    Inheritance:
    
    Ek class dusri class ki properties aur methods
    ko inherit kar sakti hai.
    
    Java mein inheritance ke liye "extends" keyword use hota hai.
*/

class Animal {

    void eat() {
        System.out.println("Animal is eating");
    }
}


class Dog extends Animal {

    void bark() {
        System.out.println("Dog is barking");
    }
}


// ============================================================
// 3. POLYMORPHISM
// ============================================================

/*
    Polymorphism:
    
    "Poly" = Many
    "Morph" = Forms
    
    Matlab same method ka different situations mein
    different behavior ho sakta hai.
    
    Yahan hum Method Overriding use kar rahe hain.
*/

class AnimalSound {

    void sound() {
        System.out.println("Animal makes sound");
    }
}


class DogSound extends AnimalSound {

    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}


class CatSound extends AnimalSound {

    @Override
    void sound() {
        System.out.println("Cat meows");
    }
}


// ============================================================
// 4. ABSTRACTION
// ============================================================

/*
    Abstraction:
    
    Unnecessary implementation details ko hide karna
    aur sirf necessary functionality dikhana.
    
    Java mein abstraction achieve karne ke liye:
    
    1. abstract class
    2. interface
    
    use kar sakte hain.
*/

abstract class AbstractAnimal {

    // Abstract method
    // Iski implementation yahan nahi hai.
    abstract void sound();

    // Normal method
    void eat() {
        System.out.println("Animal is eating");
    }
}


class AbstractDog extends AbstractAnimal {

    // Abstract method ki implementation
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}


// ============================================================
// MAIN CLASS
// ============================================================

public class OOPFourPillars {

    public static void main(String[] args) {


        // ====================================================
        // ENCAPSULATION DEMO
        // ====================================================

        System.out.println("----- ENCAPSULATION -----");

        Student s = new Student();

        // Setter se value set kar rahe hain
        s.setName("Akhilesh");
        s.setAge(22);

        // Getter se value access kar rahe hain
        System.out.println("Name: " + s.getName());
        System.out.println("Age: " + s.getAge());


        // ====================================================
        // INHERITANCE DEMO
        // ====================================================

        System.out.println("\n----- INHERITANCE -----");

        Dog d = new Dog();

        // eat() Animal class ka method hai
        // Dog ne Animal ko extend kiya hai
        d.eat();

        // bark() Dog ka apna method hai
        d.bark();


        // ====================================================
        // POLYMORPHISM DEMO
        // ====================================================

        System.out.println("\n----- POLYMORPHISM -----");

        AnimalSound a1 = new DogSound();
        AnimalSound a2 = new CatSound();

        // Same method call
        // Lekin different output
        a1.sound();
        a2.sound();


        // ====================================================
        // ABSTRACTION DEMO
        // ====================================================

        System.out.println("\n----- ABSTRACTION -----");

        AbstractDog ad = new AbstractDog();

        // Abstract method ki implementation
        // AbstractDog class mein hai
        ad.sound();

        // Normal inherited method
        ad.eat();
    }
}