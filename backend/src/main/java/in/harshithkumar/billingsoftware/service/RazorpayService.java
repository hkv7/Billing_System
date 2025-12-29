package in.harshithkumar.billingsoftware.service;

import com.razorpay.RazorpayException;
import in.harshithkumar.billingsoftware.io.RazorpayOrderResponse;

public interface RazorpayService {
    RazorpayOrderResponse createOrder(Double amount, String currency) throws RazorpayException;
}
