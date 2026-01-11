package original;

public class EmailSender {

    public static final String EXTERNAL_SERVICE_NOT_IMPLEMENTED = "external service not implemented";

    public void send(String message) {
        throw new UnsupportedOperationException(EXTERNAL_SERVICE_NOT_IMPLEMENTED);
    }
}
