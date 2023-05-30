package com.example.jhc.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.jhc.model.Booking;

public interface BookingRepository extends CrudRepository<Booking, Long> {

    Booking findByBookingNumber(int bookingNumber);

}
