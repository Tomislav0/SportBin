import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class AzureBlobStorageService {
	picturesAccount = "sportsbinblob";
	picturesContainer = "pictures";

	public uploadImage(
		sas: string,
		content: Blob,
		name: string,
		handler: (url: string) => void
	) {
		this.uploadBlob(content, name, this.containerClient(sas), handler);
	}

	private containerClient(sas: string): ContainerClient {
		return new BlobServiceClient(
			`https://${this.picturesAccount}.blob.core.windows.net?${sas}`
		).getContainerClient(this.picturesContainer);
	}

	private uploadBlob(
		content: Blob,
		name: string,
		client: ContainerClient,
		handler: (url: string) => void
	) {
		let blockBlobClient = client.getBlockBlobClient(name);
		blockBlobClient
			.uploadData(content, {
				blobHTTPHeaders: { blobContentType: content.type },
			})
			.then((response) => {
				handler(
					`https://${this.picturesAccount}.blob.core.windows.net/${this.picturesContainer}/${name}`
				);
			});
	}
}
