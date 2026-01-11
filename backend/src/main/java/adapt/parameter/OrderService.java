package adapt.parameter;

import static original.OrderService.ORDER_PLACED;

public class OrderService {
    private final MessageSender messageSender;

    public OrderService(MessageSender messageSender) {
        this.messageSender = messageSender;
    }

    public void placeOrder(String order) {
        // ... Bestelllogik
        messageSender.send(ORDER_PLACED + order);
    }
}
