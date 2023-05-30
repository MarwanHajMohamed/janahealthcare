package com.example.jhc.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.jhc.dto.BookingPostDTO;
import com.example.jhc.model.Booking;
import com.example.jhc.service.BookingService;

@RestController
public class BookingController {

    @Autowired
    BookingService bookingService;

    @GetMapping("/booking")
    public List<Booking> getBookings() {
        return bookingService.getBookings();
    }

    @PostMapping("/booking")
    public ResponseEntity<Optional<Booking>> addBooking(@RequestBody BookingPostDTO newBookingDTO) {

        if (newBookingDTO.getBookingType() == null ||
                newBookingDTO.getBookingTime() == null ||
                newBookingDTO.getBookingDate() == null) {
            return new ResponseEntity<>(Optional.ofNullable(null), HttpStatus.BAD_REQUEST);
        }

        Booking newBooking = new Booking(newBookingDTO.getClientID(),
                newBookingDTO.getBookingType(), newBookingDTO.getBookingTime(), newBookingDTO.getBookingDate(),
                newBookingDTO.getMoreInfo());
        bookingService.addBooking((newBooking));
        return new ResponseEntity<>(Optional.ofNullable(newBooking), HttpStatus.CREATED);

    }
}
