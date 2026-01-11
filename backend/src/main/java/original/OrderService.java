package original;


public class OrderService {

    public static final String ORDER_PLACED = "Order placed: ";

    public void placeOrder(String order) {
        EmailSender emailSender = new EmailSender();
        emailSender.send(ORDER_PLACED + order);
    }
}
