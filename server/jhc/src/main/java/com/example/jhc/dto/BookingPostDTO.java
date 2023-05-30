package com.example.jhc.dto;

public class BookingPostDTO {
    private int bookingNumber;
    private int clientID;
    private String bookingType;
    private String bookingTime;
    private String bookingDate;
    private String moreInfo;

    public BookingPostDTO(int clientID, String bookingType, String bookingTime, String bookingDate,
            String moreInfo) {
        super();
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
}
