import com.brother.ptouch.sdk.PrinterInfo;

public class PrintJobSetting {
    String modelName;
    PrinterInfo.Model model;
    int numberOfCopies;

    PrinterInfo.Port port;

    String ipAddress = null;
    String macAddress = null;

    PrintJobSetting(String modelName, PrinterInfo.Model model) {
        this.modelName = modelName;
        this.model = model;
    }
}
