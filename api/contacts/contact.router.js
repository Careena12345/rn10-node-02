import { Router } from "express";
import { contactController } from "./contact.controller";

const router = Router();

router.post(
  "/",
  contactController.validateNewContact,
  contactController.createContact
);
router.get("/", contactController.getAllContacts);
router.get("/:contactId", contactController.getById);
router.put(
  "/:contactId",
  contactController.validateUpdatedContact,
  contactController.updateContactById
);
router.delete("/:contactId", contactController.deleteContact);

export const contactRouter = router;
