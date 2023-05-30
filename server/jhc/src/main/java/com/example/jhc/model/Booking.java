package com.example.jhc.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "bookings")
public class Booking implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookingNumber;

    private int clientID;

    @NotBlank
    private String bookingType;

    @NotBlank
    private String bookingTime;

    @NotBlank
    private String bookingDate;

    private String moreInfo;

    public Booking() {
    }

    public Booking(int clientID, String bookingType, String bookingTime, String bookingDate,
            String moreInfo) {
        this.clientID = clientID;
        this.bookingType = bookingType;
        this.bookingTime = bookingTime;
        this.bookingDate = bookingDate;
        this.moreInfo = moreInfo;
    }

    public int getBookingNumber() {
        return this.bookingNumber;
    }

    public void setBookingNumber(int bookingNumber) {
        this.bookingNumber = bookingNumber;
    }

    public int getClientID() {
        return this.clientID;
    }

    public void setClientID(int clientID) {
        this.clientID = clientID;
    }

    public String getBookingType() {
        return this.bookingType;
    }

    public void setBookingType(String bookingType) {
        this.bookingType = bookingType;
    }

    public String getBookingTime() {
        return this.bookingTime;
    }

    public void setBookingTime(String bookingTime) {
        this.bookingTime = bookingTime;
    }

    public String getBookingDate() {
        return this.bookingDate;
    }

    public void setBookingDate(String bookingDate) {
        this.bookingDate = bookingDate;
    }

    public String getMoreInfo() {
        return this.moreInfo;
    }

    public void setMoreInfo(String moreInfo) {
        this.moreInfo = moreInfo;
    }

    @Override
    public String toString() {
        return "{" +
                " bookingNumber='" + getBookingNumber() + "'" +
                ", clientID='" + getClientID() + "'" +
                ", bookingType='" + getBookingType() + "'" +
                ", bookingTime='" + getBookingTime() + "'" +
                ", bookingDate='" + getBookingDate() + "'" +
                ", moreInfo='" + getMoreInfo() + "'" +
                "}";
    }

}