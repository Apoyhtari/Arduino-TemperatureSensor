/*
Adafruit Arduino - Lesson 12. Light and Temperature
*/
 
#include <LiquidCrystal.h>
#include <SoftwareSerial.h>


int numReadings = 500;
int readingCounter = 0;
int tempPin = 0;
int lightPin = 1;
String filename; 
 
//                BS  E  D4 D5  D6 D7
LiquidCrystal lcd(7, 8, 9, 10, 11, 12);
 
void setup() 
{
  Serial.begin(9600);
  lcd.begin(16, 2);
}
 
void loop()
{
  // Display Temperature in C
  int tempReading = analogRead(tempPin);
  float tempVolts = tempReading * 4.5 / 1024.0;
  float tempC = (tempVolts - 0.5) * 100.0;
  float tempF = tempC * 9.0 / 5.0 + 32.0;
  //         ----------------
  lcd.print("Temp         C  ");
  lcd.setCursor(6, 0);
  lcd.print(tempC);
  
  // Display Light on second row
  int lightReading = analogRead(lightPin);
  lcd.setCursor(0, 1);
  //         ----------------
  lcd.print("Light           ");  
  lcd.setCursor(6, 1);
  lcd.print(lightReading);
  Serial.println(tempC);
  delay(60000);
}
