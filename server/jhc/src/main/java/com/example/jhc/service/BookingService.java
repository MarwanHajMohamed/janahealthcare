package com.example.jhc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.jhc.model.Booking;
import com.example.jhc.repository.BookingRepository;

@Service
public class BookingService {
    @Autowired
    BookingRepository bookingRepository;

    public BookingService() {
        super();
    }

    // Get all bookings
    public List<Booking> getBookings() {
        return (List<Booking>) bookingRepository.findAll();
    }

    // Get bookings by booking id
    public Booking getBookingsByID(int bookingNumber) {
        return bookingRepository.findByBookingNumber(bookingNumber);
    }

    // Add a new booking
    public void addBooking(Booking newBooking) {
        bookingRepository.save(newBooking);
    }
}
